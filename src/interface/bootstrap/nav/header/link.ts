import { IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { a, A } from "../../../html/a.js";

export interface Link extends A {
	role?: "tab" | "button";
	toggle?: "dropdown" | "pill" | "tab";
	active?: boolean;
	current?: true | "page";
	handleActive?: boolean;
}

const handleActive = (event: Event) => {
	const target = (event.target as Element).closest(".nav-link") as Element;
	const container = target.closest(".nav");
	if (container) {
		let lastCurrent: string | null = "";
		const lastActive = container?.querySelector(".nav-link.active");

		if (lastActive) {
			lastCurrent = lastActive.getAttribute("aria-current");
			lastActive.removeAttribute("aria-current");
			lastActive.classList.remove("active");

			container.dispatchEvent(
				new CustomEvent("change.bs.nav", {
					detail: {
						target: target,
						relatedTarget: lastActive,
					},
				})
			);
		} else {
			container.dispatchEvent(
				new CustomEvent("change.bs.nav", {
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

const convert = (attr: Link) => {
	switch (attr.toggle) {
		case "dropdown":
			attr.role ??= "button";
			break;
		case "pill":
		case "tab":
			attr.role ??= "tab";
			break;
		default:
	}

	attr.current ??= "page";

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
				"nav-link",
				attr.active ? "active" : undefined,
				attr.toggle === "dropdown" ? "dropdown-toggle" : undefined,
			],
			aria: {
				current: attr.active ? (attr.current === true ? "true" : attr.current) : undefined,
				expanded: attr.toggle === "dropdown" ? "false" : undefined,
			},
			role: attr.role,
			data: { "bs-toggle": attr.toggle },
		},
		attr
	);

	delete attr.handleActive;
	delete attr.current;
	delete attr.active;
	delete attr.toggle;

	return attr;
};

export class link extends a {
	constructor();
	constructor(attr: Link);
	constructor(elem: IElem);
	constructor(attr: Link, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Link>("elem", arg)));
	}
}
