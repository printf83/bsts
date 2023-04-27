import { IElem, genTagClass } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { ITagTd, td as TTd } from "../../html/td.js";
import { mergeObject } from "../../core/mergeObject.js";

export interface IBsTableTd extends ITagTd {
	color?: bootstrapType.color;
	active?: boolean;

	responsiveAttr?: string;
	responsiveTitle?: string;
}

const convert = (attr: IBsTableTd) => {
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
	constructor(); //#1
	constructor(attr: IBsTableTd); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsTableTd, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsTableTd>("elem", arg)));
	}
}

export const Td = (AttrOrElem?: IBsTableTd | IElem, Elem?: IElem) => genTagClass<td, IBsTableTd>(td, AttrOrElem, Elem);
