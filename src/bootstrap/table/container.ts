import { IAttr, IElem, tag } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { table } from "../../html/table.js";
import { tbody } from "./tbody.js";
import { tr } from "./tr.js";
import { td } from "./td.js";
import { th } from "../../html/th.js";
import { thead } from "./thead.js";

export interface IAttrBSTableContainer extends IAttr {
	color?: bootstrapType.color[number];
	striped?: "row" | "col";
	hoverable?: boolean;
	bordered?: boolean;
	small?: boolean;
	captionLocation?: "top" | "bottom";

	item?: (string | tag | (string | tag)[])[][];
}

const convert = (attr: IAttrBSTableContainer) => {
	attr.class = mergeClass(attr.class, [
		"table",
		attr.color ? `table-${attr.color}` : undefined,
		attr.striped ? (attr.striped === "row" ? "table-striped" : "table-striped-columns") : undefined,
		attr.hoverable ? "table-hover" : undefined,
		attr.bordered !== undefined ? (attr.bordered === true ? "table-bordered" : "table-borderless") : undefined,
		attr.small ? "table-sm" : undefined,
		attr.captionLocation === "top" ? "caption-top" : undefined,
	]);

	if (attr.item && !attr.elem) {
		attr.elem = [];

		if (attr.item.length > 1) {
			attr.elem.push(
				new thead({
					elem: new tr({
						elem: attr.item[0].map((i) => {
							return new th({ scope: "col" }, i);
						}),
					}),
				})
			);
		}

		attr.elem.push(
			new tbody({
				divider: attr.item.length > 1,
				elem: attr.item.slice(attr.item.length > 1 ? 1 : 0).map((i) => {
					return new tr({
						elem: i.map((j) => {
							return new td(j);
						}),
					});
				}),
			})
		);
	}

	delete attr.color;
	delete attr.striped;
	delete attr.hoverable;
	delete attr.bordered;
	delete attr.small;
	delete attr.captionLocation;

	delete attr.item;

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
