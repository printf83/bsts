import { genTagClass, IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { a, A } from "../../../html/a.js";

export interface Link extends A {
	role?: "tab" | "button";
	toggle?: "dropdown" | "pill" | "tab";
	active?: boolean;
	current?: true | "page";
}

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

	delete attr.current;
	delete attr.active;
	delete attr.toggle;

	return attr;
};

export class link extends a {
	constructor(); //#1
	constructor(attr: Link); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Link, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Link>("elem", arg)));
	}
}

export const Link = (AttrOrElem?: Link | IElem, Elem?: IElem) => genTagClass<link, Link>(link, AttrOrElem, Elem);
