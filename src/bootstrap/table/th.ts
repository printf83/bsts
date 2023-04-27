import { IElem, genTagClass } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { ITagTh, th as TTh } from "../../html/th.js";
import { mergeObject } from "../../core/mergeObject.js";

export interface IBsTableTh extends ITagTh {
	color?: bootstrapType.color;
	active?: boolean;

	responsiveAttr?: string;
	responsiveTitle?: string;
}

const convert = (attr: IBsTableTh) => {
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

export class th extends TTh {
	constructor(); //#1
	constructor(attr: IBsTableTh); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsTableTh, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsTableTh>("elem", arg)));
	}
}

export const Th = (AttrOrElem?: IBsTableTh | IElem, Elem?: IElem) => genTagClass<th, IBsTableTh>(th, AttrOrElem, Elem);
