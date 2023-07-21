import { IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { Td as ITd, td as TTd } from "../../html/td.js";
import { mergeObject } from "../../core/mergeObject.js";

export interface Td extends ITd {
	color?: bootstrapType.color;
	active?: boolean;

	responsiveAttr?: string;
	responsiveTitle?: string;
}

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

export class td extends TTd {
	constructor();
	constructor(attr: Td);
	constructor(elem: IElem);
	constructor(attr: Td, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Td>("elem", arg)));
	}
}
