import { IElem, genTagClass, isAttr } from "../../../core/tag.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { span } from "../../../html/span.js";
import { Toggle, toggle as TCollapseToggle } from "../../collapse/toggle.js";

const convert = (attr: Toggle) => {
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
	constructor();
	constructor(attr: Toggle);
	constructor(elem: IElem);
	constructor(attr: Toggle, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<Toggle>(arg[0])) {
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

export const Collapse = (AttrOrElem?: Toggle | IElem, Elem?: IElem) =>
	genTagClass<collapse, Toggle>(collapse, AttrOrElem, Elem);
