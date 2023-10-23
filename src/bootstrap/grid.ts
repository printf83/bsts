import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";
import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { div } from "../html/div.js";

const convert = (attr: attr) => {
	attr = mergeObject(
		{
			display: "grid",
			gap: 3,
		},
		attr
	);

	return attr;
};

export class grid extends div {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor("elem", arg)));
	}
}
