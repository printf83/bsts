import { IElem, isAttr } from "../../../core/base/tag.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
import { span } from "../../../ht/span.js";
import { IAttrBSOffcanvasToggle, toggle as TOffcanvasToggle } from "../../offcanvas/toggle.js";

const convert = (attr: IAttrBSOffcanvasToggle) => {
	attr = mergeObject(
		{
			class: "navbar-toggler",
			elem: attr.elem ? attr.elem : new span({ class: "navbar-toggler-icon" }),
			aria: { expanded: "false", label: "Toggle navigation" },
		},
		attr
	);

	return attr;
};

export class offcanvas extends TOffcanvasToggle {
	constructor(); //#1
	constructor(attr: IAttrBSOffcanvasToggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSOffcanvasToggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSOffcanvasToggle>(arg[0])) {
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
