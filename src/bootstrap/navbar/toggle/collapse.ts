import { elem } from "../../../interface/core/elem.js";
import { mergeObject } from "../../../core/util/mergeObject.js";
import { span } from "../../../html/span.js";
import { bsConstructor } from "../../../core/bootstrap.js";
import { button } from "../../collapse/button.js";
import { button as Button } from "../../../interface/bootstrap/collapse/button.js";

export class collapse extends button {
	constructor();
	constructor(attr: Button);
	constructor(elem: elem | elem[]);
	constructor(attr: Button, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Button>("elem", arg));
	}

	convert(attr: Button) {
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
		return super.convert(attr);
	}
}
