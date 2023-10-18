import { bsConstArg } from "../core/bootstrap.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";
import { mergeObject } from "../core/mergeObject.js";
import { div } from "../html/div.js";

const convert = (attr: attr) => {
	attr = mergeObject(
		{
			col: true,
		},
		attr
	);

	return attr;
};

export class col extends div {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem);
	constructor(attr: attr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
