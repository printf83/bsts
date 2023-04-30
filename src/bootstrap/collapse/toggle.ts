import { genTagClass, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { button, Button } from "../button.js";

export interface Toggle extends Button {
	link?: true;
	target?: string;
	expanded?: boolean;
}

const convert = (attr: Toggle) => {
	attr = mergeObject(
		{
			class: [attr.expanded ? "" : "collapsed"],
			data: {
				"bs-toggle": "collapse",
				"bs-target": attr.link ? undefined : attr.target,
			},
			aria: { expanded: attr.expanded ? "true" : "false" },
			role: attr.link ? "button" : undefined,
			href: attr.link ? attr.target : undefined,
		},
		attr
	);

	delete attr.link;
	delete attr.target;
	delete attr.expanded;

	return attr;
};

export class toggle extends button {
	constructor(); //#1
	constructor(attr: Toggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Toggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Toggle>("elem", arg)));
	}
}

export const Toggle = (AttrOrElem?: Toggle | IElem, Elem?: IElem) =>
	genTagClass<toggle, Toggle>(toggle, AttrOrElem, Elem);
