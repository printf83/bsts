import { IElem } from "../../core/base/tag.js";
import { conProp } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { button, IAttrBSButton } from "../button.js";

export interface IAttrBSOffcanvasToggle extends IAttrBSButton {
	link?: true;
	target?: string;
	control?: string;
}

const convert = (attr: IAttrBSOffcanvasToggle): IAttrBSButton => {
	attr = mergeObject(
		{
			data: {
				"bs-toggle": "offcanvas",
				"bs-target": attr.link ? undefined : attr.target,
			},
			aria: { expanded: "false", control: attr.control },
			role: attr.link ? "button" : undefined,
			href: attr.link ? attr.target : undefined,
		},
		attr
	);

	delete attr.link;
	delete attr.target;
	delete attr.control;

	return attr;
};

export class toggle extends button {
	constructor(); //#1
	constructor(attr: IAttrBSOffcanvasToggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSOffcanvasToggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conProp<IAttrBSOffcanvasToggle>("elem", convert, arg));
	}
}
