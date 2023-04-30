import { IElem, genTagClass, isAttr } from "../../../core/tag.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { span } from "../../../html/span.js";
import { Toggle as IToggle, toggle as TToggle } from "../../offcanvas/toggle.js";

const convert = (attr: IToggle) => {
	attr = mergeObject(
		{
			defColor: false,
			class: "navbar-toggler",
			padding: 2,
			border: false,
			elem: attr.elem ? attr.elem : new span({ class: "navbar-toggler-icon" }),
			aria: { expanded: "false", label: "Toggle navigation" },
		},
		attr
	);

	return attr;
};

export class offcanvas extends TToggle {
	constructor(); //#1
	constructor(attr: IToggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IToggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IToggle>(arg[0])) {
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

export const Offcanvas = (AttrOrElem?: IToggle | IElem, Elem?: IElem) =>
	genTagClass<offcanvas, IToggle>(offcanvas, AttrOrElem, Elem);
