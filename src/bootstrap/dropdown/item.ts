import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { a } from "../../html/a.js";
import { item as Item } from "../../interface/bootstrap/dropdown/item.js";

const handleActive = (event: Event) => {
	const target = (event.target as Element).closest(".dropdown-item") as Element;
	const container = target.closest(".dropdown-menu");
	if (container) {
		let lastCurrent: string | null = "";
		const lastActive = container?.querySelector(".dropdown-item.active");

		if (lastActive) {
			lastCurrent = lastActive.getAttribute("aria-current");
			lastActive.removeAttribute("aria-current");
			lastActive.classList.remove("active");

			container.dispatchEvent(
				new CustomEvent("change.bs.menu", {
					detail: {
						target: target,
						relatedTarget: lastActive,
					},
				})
			);
		} else {
			container.dispatchEvent(
				new CustomEvent("change.bs.menu", {
					detail: {
						target: target,
						relatedTarget: null,
					},
				})
			);
		}

		target.setAttribute("aria-current", lastCurrent ? lastCurrent : "page");
		target.classList.add("active");
	}
};

export class item extends a {
	constructor();
	constructor(attr: Item);
	constructor(elem: elem | elem[]);
	constructor(attr: Item, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Item>("elem", arg));
	}

	convert(attr: Item) {
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
				class: ["dropdown-item", attr.active ? "active" : undefined],
				aria: { current: attr.active ? (attr.current ? attr.current : "true") : undefined },
			},
			attr
		);

		delete attr.handleActive;
		delete attr.active;
		delete attr.current;
		return super.convert(attr);
	}
}
