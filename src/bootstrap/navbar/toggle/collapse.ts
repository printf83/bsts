import { IElem, genTagClass, isAttr } from "../../../core/tag.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { span } from "../../../html/span.js";
import { IBsCollapseToggle, toggle as TCollapseToggle } from "../../collapse/toggle.js";

const convert = (attr: IBsCollapseToggle) => {
	attr = mergeObject(
		{
			defColor: false,
			padding: 2,
			border: false,
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
	constructor(attr: IBsCollapseToggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsCollapseToggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IBsCollapseToggle>(arg[0])) {
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

export const Collapse = (AttrOrElem?: IBsCollapseToggle | IElem, Elem?: IElem) =>
	genTagClass<collapse, IBsCollapseToggle>(collapse, AttrOrElem, Elem);
