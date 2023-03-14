import { IAttr, IElem } from "../../core/base/tag.js";
import { bootstrapType, bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { table } from "../../html/table.js";

export interface IAttrBSTableContainer extends IAttr {
	color?: bootstrapType.color[number];
	striped?: "row" | "col";
	hoverable?: boolean;
	bordered?: boolean;
	small?: boolean;
	responsive?: true | bootstrapType.viewport[number];
	captionLocation?: "top" | "bottom";
}

const convert = (attr: IAttrBSTableContainer) => {
	attr.class = mergeClass(attr.class, [
		"table",
		attr.color ? `table-${attr.color}` : undefined,
		attr.striped ? (attr.striped === "row" ? "table-striped" : "table-striped-columns") : undefined,
		attr.hoverable ? "table-hover" : undefined,
		attr.bordered !== undefined ? (attr.bordered === true ? "table-bordered" : "table-borderless") : undefined,
		attr.small ? "table-sm" : undefined,
		attr.responsive
			? attr.responsive === true
				? "table-responsive"
				: `table-responsive-${attr.responsive}`
			: undefined,
		attr.captionLocation === "top" ? "caption-top" : undefined,
	]);

	delete attr.color;
	delete attr.striped;
	delete attr.hoverable;
	delete attr.bordered;
	delete attr.small;
	delete attr.responsive;
	delete attr.captionLocation;

	return attr;
};

export class container extends table {
	constructor(); //#1
	constructor(attr: IAttrBSTableContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSTableContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSTableContainer>("elem", convert, arg));
	}
}
