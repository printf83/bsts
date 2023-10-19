import { elem } from "../../../../interface/core/elem.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { button as HButton } from "../../../../html/button.js";
import { mergeObject } from "../../../../core/util/mergeObject.js";
import { span } from "../../../../html/span.js";
import { visuallyhidden } from "../../../visuallyhidden.js";
import { prev as Prev } from "../../../../interface/bootstrap/carousel/inner/control/prev.js";

const convert = (attr: Prev) => {
	attr = mergeObject(
		{
			class: "carousel-control-prev",
			data: {
				"bs-target": attr.target,
				"bs-slide": "prev",
			},
		},
		attr
	);

	if (!attr.elem) {
		attr.elem = [
			new span({ class: "carousel-control-prev-icon", aria: { hidden: "true" } }),
			new visuallyhidden("Previous"),
		];
	}

	delete attr.target;

	return attr;
};

export class prev extends HButton {
	constructor();
	constructor(attr: Prev);
	constructor(elem: elem | elem[]);
	constructor(attr: Prev, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Prev>("elem", arg)));
	}
}
