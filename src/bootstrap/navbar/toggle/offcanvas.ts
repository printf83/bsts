import { IElem } from "../../../core/tag.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { span } from "../../../html/span.js";
import { button as BToggle } from "../../offcanvas/button.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { button as IToggle } from "../../../interface/bootstrap/offcanvas/button.js";

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

export class offcanvas extends BToggle {
	constructor();
	constructor(attr: IToggle);
	constructor(elem: elem);
	constructor(attr: IToggle, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IToggle>("elem", arg)));
	}
}
