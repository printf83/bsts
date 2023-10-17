import { IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { Th as ITh, th as TTh } from "../../html/th.js";
import { mergeObject } from "../../core/mergeObject.js";

export interface Th extends ITh {
	color?: bootstrapType.color;
	active?: boolean;

	responsiveAttr?: string;
	responsiveTitle?: string;
}

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

export class th extends TTh {
	constructor();
	constructor(attr: Th);
	constructor(elem: IElem);
	constructor(attr: Th, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Th>("elem", arg)));
	}
}
