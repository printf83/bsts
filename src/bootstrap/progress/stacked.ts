import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { div } from "../../html/div.js";

export class stacked extends div {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: attr) {
		attr = mergeObject({ class: "progress-stacked" }, attr);

		return super.convert(attr);
	}
}
