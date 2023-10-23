import { elem } from "../../../../interface/core/elem.js";
import { bsConstructor } from "../../../../core/bootstrap.js";
import { button as HButton } from "../../../../html/button.js";
import { mergeObject } from "../../../../core/util/mergeObject.js";
import { span } from "../../../../html/span.js";
import { visuallyhidden } from "../../../visuallyhidden.js";
import { next as Next } from "../../../../interface/bootstrap/carousel/inner/control/next.js";

const convert = (attr: Next) => {
	attr = mergeObject(
		{
			class: "carousel-control-next",
			data: {
				"bs-target": attr.target,
				"bs-slide": "next",
			},
		},
		attr
	);

	if (!attr.elem) {
		attr.elem = [
			new span({ class: "carousel-control-next-icon", aria: { hidden: "true" } }),
			new visuallyhidden("Next"),
		];
	}

	delete attr.target;

	return attr;
};

export class next extends HButton {
	constructor();
	constructor(attr: Next);
	constructor(elem: elem | elem[]);
	constructor(attr: Next, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor<Next>("elem", arg)));
	}
}
