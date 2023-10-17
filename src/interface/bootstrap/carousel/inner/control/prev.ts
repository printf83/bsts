import { IElem } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { button as TButton, Button } from "../../../../html/button.js";
import { mergeObject } from "../../../../core/mergeObject.js";
import { span } from "../../../../html/span.js";
import { visuallyhidden } from "../../../visuallyhidden.js";

export interface Prev extends Button {
	target?: string;
}

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

export class prev extends TButton {
	constructor();
	constructor(attr: Prev);
	constructor(elem: IElem);
	constructor(attr: Prev, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Prev>("elem", arg)));
	}
}
