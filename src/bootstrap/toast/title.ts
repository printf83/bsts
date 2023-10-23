import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { strong } from "../../html/strong.js";

const convert = (attr: attr) => {
	attr = mergeObject({ marginEnd: "auto" }, attr);
	return attr;
};

export class title extends strong {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor("elem", arg)));
	}
}
