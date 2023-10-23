import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { label } from "../../html/label.js";
import { itemLabel as ItemLabel } from "../../interface/bootstrap/list/itemLabel.js";

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
	constructor(elem: elem | elem[]);
	constructor(attr: ItemLabel, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor<ItemLabel>("elem", arg)));
	}
}
