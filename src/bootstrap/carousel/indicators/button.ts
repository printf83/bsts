import { elem } from "../../../interface/core/elem.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { button as HButton } from "../../../html/button.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { button as Button } from "../../../interface/bootstrap/carousel/indicators/button.js";

const convert = (attr: Button) => {
	attr = mergeObject(
		{
			class: [attr.active ? "active" : undefined],
			aria: {
				current: attr.active ? "true" : undefined,
			},
			data: {
				"bs-target": attr.target,
				"bs-slide-to": attr.slide?.toString(),
			},
		},
		attr
	);

	delete attr.active;
	delete attr.slide;
	delete attr.target;

	return attr;
};

export class button extends HButton {
	constructor();
	constructor(attr: Button);
	constructor(elem: elem | elem[]);
	constructor(attr: Button, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Button>("elem", arg)));
	}
}
