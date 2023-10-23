import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { th as HTh } from "../../html/th.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { th as Th } from "../../interface/bootstrap/table/th.js";

const convert = (attr: Th) => {
	attr.class = mergeClass(attr.class, [
		attr.color ? `table-${attr.color}` : undefined,
		attr.active ? "table-active" : undefined,
	]);

	if (attr.responsiveAttr && attr.responsiveTitle) {
		attr = mergeObject(
			{
				data: {
					[attr.responsiveAttr]: attr.responsiveTitle,
				},
			},
			attr
		);
	}

	delete attr.color;
	delete attr.active;
	delete attr.responsiveAttr;
	delete attr.responsiveTitle;

	return attr;
};

export class th extends HTh {
	constructor();
	constructor(attr: Th);
	constructor(elem: elem | elem[]);
	constructor(attr: Th, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor<Th>("elem", arg)));
	}
}
