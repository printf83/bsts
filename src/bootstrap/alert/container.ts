import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { div } from "../../html/div.js";
import { btnclose } from "../btnclose.js";
import { container as Container } from "../../interface/bootstrap/alert/container.js";

export class container extends div {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Container>("elem", arg));
	}

	convert(attr: Container) {
		//add default value
		attr.role ??= "alert";
		attr.color ??= "primary";
		attr.animation ??= true;

		//add alert class
		attr = mergeObject(
			{
				class: [
					"alert",
					attr.color ? `alert-${attr.color}` : undefined,
					attr.dismissible ? "alert-dismissible" : undefined,
					attr.dismissible ? (attr.animation ? "fade" : undefined) : undefined,
					attr.dismissible ? "show" : undefined,
				],
				role: attr.role,
				border: attr.callout ? [false, "start"] : attr.border,
				borderWidth: attr.callout ? 4 : attr.borderWidth,
				borderColor: attr.callout ? attr.color : attr.borderColor,
				rounded: attr.callout ? false : attr.rounded,
			},
			attr
		);

		if (attr.dismissible) {
			attr.elem ??= [];
			if (!Array.isArray(attr.elem)) attr.elem = [attr.elem];

			attr.elem.push(new btnclose({ data: { "bs-dismiss": "alert" } }));
		}

		delete attr.animation;
		delete attr.callout;
		delete attr.color;
		delete attr.dismissible;
		return super.convert(attr);
	}
}
