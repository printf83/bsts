import { elem } from "../../../interface/core/elem.js";
import { mergeObject } from "../../../core/util/mergeObject.js";
import { span } from "../../../html/span.js";
import { button as BToggle } from "../../offcanvas/button.js";
import { bsConstructor } from "../../../core/bootstrap.js";
import { button as Offcanvas } from "../../../interface/bootstrap/offcanvas/button.js";

export class offcanvas extends BToggle {
	constructor();
	constructor(attr: Offcanvas);
	constructor(elem: elem | elem[]);
	constructor(attr: Offcanvas, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Offcanvas>("elem", arg));
	}

	convert(attr: Offcanvas) {
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
		return super.convert(attr);
	}
}
