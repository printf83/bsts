import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { a, A } from "../../html/a.js";

export interface Item extends A {
	active?: boolean;
	current?: string;
	handleActive?: boolean;
}

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

const convert = (attr: Item) => {
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

	return attr;
};

export class item extends a {
	constructor();
	constructor(attr: Item);
	constructor(elem: IElem);
	constructor(attr: Item, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Item>("elem", arg)));
	}
}
