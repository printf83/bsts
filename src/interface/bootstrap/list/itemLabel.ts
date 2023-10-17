import { bootstrapType } from "../../core/bootstrap.js";
import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { Label, label } from "../../html/label.js";

export interface ItemLabel extends Label {
	active?: boolean;
	disabled?: boolean;
	action?: boolean;
	color?: bootstrapType.color;
	handleActive?: boolean;
}

const handleActive = (event: Event) => {
	const target = (event.target as Element).closest(".list-group-item") as Element;
	const container = target.closest(".list-group");
	if (container) {
		const lastActive = container?.querySelector(".list-group-item.active");

		if (lastActive) {
			lastActive.classList.remove("active");

			container.dispatchEvent(
				new CustomEvent("change.bs.list", {
					detail: {
						target: target,
						relatedTarget: lastActive,
					},
				})
			);
		} else {
			container.dispatchEvent(
				new CustomEvent("change.bs.list", {
					detail: {
						target: target,
						relatedTarget: null,
					},
				})
			);
		}

		target.classList.add("active");
	}
};

const convert = (attr: ItemLabel) => {
	//handle item active
	if (attr.handleActive) {
		if (attr.on) {
			if (!attr.on.click) {
				attr.on["click"] = handleActive;
			}
		} else {
			attr.on = {
				click: handleActive,
			};
		}
	}

	attr = mergeObject(
		{
			class: [
				"list-group-item",
				attr.action ? "list-group-item-action" : undefined,
				attr.color ? `list-group-item-${attr.color}` : undefined,
				attr.active ? "active" : undefined,
				attr.disabled ? "disabled" : undefined,
			],
			aria: { disabled: attr.disabled ? "true" : undefined },
		},
		attr
	);

	delete attr.handleActive;
	delete attr.active;
	delete attr.disabled;
	delete attr.action;
	delete attr.color;

	return attr;
};

export class itemLabel extends label {
	constructor();
	constructor(attr: ItemLabel);
	constructor(elem: IElem);
	constructor(attr: ItemLabel, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<ItemLabel>("elem", arg)));
	}
}
