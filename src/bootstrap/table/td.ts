import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { td as HTd } from "../../html/td.js";
import { mergeObject } from "../../core/mergeObject.js";
import { td as Td } from "../../interface/bootstrap/table/td.js";

const convert = (attr: Td) => {
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

export class td extends HTd {
	constructor();
	constructor(attr: Td);
	constructor(elem: elem);
	constructor(attr: Td, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Td>("elem", arg)));
	}
}
