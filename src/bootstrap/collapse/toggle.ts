import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { button, IAttrBSButton } from "../button.js";

export interface IAttrBSCollapseToggle extends IAttrBSButton {
	link?: true;
	target?: string;
	expanded?: boolean;
}

const convert = (attr: IAttrBSCollapseToggle) => {
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
	constructor(attr: IAttrBSCollapseToggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCollapseToggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSCollapseToggle>("elem", convert, arg));
	}
}
