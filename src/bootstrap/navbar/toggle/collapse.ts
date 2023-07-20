import { IElem } from "../../../core/tag.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { span } from "../../../html/span.js";
import { Button, button } from "../../collapse/button.js";
import { bsConstArg } from "../../../core/bootstrap.js";

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
		super(convert(bsConstArg<Button>("elem", arg)));
	}
}
