import { IElem, genTagClass, isAttr } from "../../../core/tag.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { span } from "../../../html/span.js";
import { Button, button } from "../../collapse/button.js";

const convert = (attr: Button) => {
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

export class collapse extends button {
	constructor();
	constructor(attr: Button);
	constructor(elem: IElem);
	constructor(attr: Button, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<Button>(arg[0])) {
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

export const Collapse = (AttrOrElem?: Button | IElem, Elem?: IElem) =>
	genTagClass<collapse, Button>(collapse, AttrOrElem, Elem);
