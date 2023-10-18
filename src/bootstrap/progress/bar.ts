import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";
import { bar as Bar } from "../../interface/bootstrap/progress/bar.js";

const convert = (attr: Bar) => {
	attr = mergeObject(
		{
			class: [
				"progress-bar",
				attr.striped ? "progress-bar-striped" : undefined,
				attr.striped && attr.animated ? "progress-bar-animated" : undefined,
			],
			bgColor: attr.color,
		},
		attr
	);

	delete attr.color;
	delete attr.striped;
	delete attr.animated;

	return attr;
};

export class bar extends div {
	constructor();
	constructor(attr: Bar);
	constructor(elem: elem);
	constructor(attr: Bar, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Bar>("elem", arg)));
	}
}
