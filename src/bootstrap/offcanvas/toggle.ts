import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { button, IBsButton } from "../button.js";

export interface IBsOffcanvasToggle extends IBsButton {
	link?: true;
	target?: string;
}

const convert = (attr: IBsOffcanvasToggle) => {
	attr = mergeObject(
		{
			data: {
				"bs-toggle": "offcanvas",
				"bs-target": attr.link ? undefined : attr.target,
			},
			aria: { expanded: "false" },
			role: attr.link ? "button" : undefined,
			href: attr.link ? attr.target : undefined,
		},
		attr
	);

	delete attr.link;
	delete attr.target;

	return attr;
};

export class toggle extends button {
	constructor(); //#1
	constructor(attr: IBsOffcanvasToggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsOffcanvasToggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsOffcanvasToggle>("elem", arg)));
	}
}
