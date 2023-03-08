import { IElem, isAttr } from "../../core/base/tag.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { button, IAttrBSButton } from "../button.js";

export interface IAttrBSCollapseToggle extends IAttrBSButton {
	link?: true;
	target?: string;
	control?: string;
}

const convert = (attr: IAttrBSCollapseToggle): IAttrBSButton => {
	attr = mergeObject(
		{
			data: {
				"bs-toggle": "collapse",
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
	constructor(attr: IAttrBSCollapseToggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCollapseToggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSCollapseToggle>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}
}