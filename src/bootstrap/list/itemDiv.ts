import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { div } from "../../html/div.js";

import { itemDiv as ItemDiv } from "../../interface/bootstrap/list/itemDiv.js";

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

export class itemDiv extends div {
	constructor();
	constructor(attr: ItemDiv);
	constructor(elem: elem | elem[]);
	constructor(attr: ItemDiv, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<ItemDiv>("elem", arg));
	}

	convert(attr: ItemDiv) {
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
		return super.convert(attr);
	}
}
