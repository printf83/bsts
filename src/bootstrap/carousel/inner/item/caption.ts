import { elem } from "../../../../interface/core/elem.js";
import { attr } from "../../../../interface/core/attr.js";
import { bsConstructor } from "../../../../core/bootstrap.js";
import { div } from "../../../../html/div.js";
import { mergeClass } from "../../../../core/util/mergeClass.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, ["carousel-caption"]);
	attr.display ??= ["none", "md-block"];

	return attr;
};

export class caption extends div {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor("elem", arg)));
	}

	convert(attr: attr) {
		return super.convert(attr);
	}
}
