import { IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { button, IAttrBSButton } from "../button.js";

export interface IAttrBSOffcanvasToggle extends IAttrBSButton {
	link?: true;
	target?: string;
}

const convert = (attr: IAttrBSOffcanvasToggle) => {
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
	constructor(attr: IAttrBSOffcanvasToggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSOffcanvasToggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSOffcanvasToggle>("elem", convert, arg));
	}
}
