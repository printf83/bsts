import { IElem, genTagClass } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { button as TButton, Button } from "../../../../html/button.js";
import { mergeObject } from "../../../../core/mergeObject.js";
import { span } from "../../../../html/span.js";
import { visuallyhidden } from "../../../visuallyhidden.js";

export interface Next extends Button {
	target?: string;
}

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

export class next extends TButton {
	constructor(); //#1
	constructor(attr: Next); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Next, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Next>("elem", arg)));
	}
}

export const Next = (AttrOrElem?: Next | IElem, Elem?: IElem) => genTagClass<next, Next>(next, AttrOrElem, Elem);
