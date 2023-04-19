import { IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { a, ITagA } from "../../../html/a.js";

export interface IBsNavLink extends ITagA {
	role?: "tab" | "button";
	toggle?: "dropdown" | "pill" | "tab";
	active?: boolean;
}

const convert = (attr: IBsNavLink) => {
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

	attr = mergeObject(
		{
			class: [
				"nav-link",
				attr.active ? "active" : undefined,
				attr.toggle === "dropdown" ? "dropdown-toggle" : undefined,
			],
			aria: {
				current: attr.active ? "page" : undefined,
				expanded: attr.toggle === "dropdown" ? "false" : undefined,
			},
			role: attr.role,
			data: { "bs-toggle": attr.toggle },
		},
		attr
	);

	delete attr.active;
	delete attr.toggle;

	return attr;
};

export class link extends a {
	constructor(); //#1
	constructor(attr: IBsNavLink); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsNavLink, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsNavLink>("elem", arg)));
	}
}
