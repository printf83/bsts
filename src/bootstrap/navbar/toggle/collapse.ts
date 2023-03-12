import { IElem, isAttr } from "../../../core/base/tag.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
import { span } from "../../../html/span.js";
import { IAttrBSCollapseToggle, toggle as TCollapseToggle } from "../../collapse/toggle.js";

const convert = (attr: IAttrBSCollapseToggle) => {
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

export class collapse extends TCollapseToggle {
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
