import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { table } from "../../html/table.js";
import { tbody } from "./tbody.js";
import { tr } from "./tr.js";
import { td } from "./td.js";
import { div } from "../../html/div.js";
import { th } from "../../html/th.js";
import { thead } from "./thead.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { container as Container } from "../../interface/bootstrap/table/container.js";

export class container extends table {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Container>("elem", arg));
	}

	convert(attr: Container) {
		if (attr.item && !attr.elem) {
			attr.elem = [];

			if (attr.item.length > 1) {
				attr.elem.push(
					new thead({
						elem: new tr({
							elem: attr.item[0]?.map((i) => {
								return new th({ scope: "col" }, i);
							}),
						}),
					})
				);
			}

			let responsiveHeader: string[] = [];
			if (attr.responsiveAttr) {
				if (attr.responsiveHeader) {
					responsiveHeader = attr.responsiveHeader;
				} else {
					if (attr.item.length >= 2 && attr.item[0]?.length === attr.item[1]?.length) {
						responsiveHeader = attr.item[0]?.map((i) => i.toString()) ?? [];
					}
				}
			}

			if (attr.responsiveAttr && attr.item.length >= 2 && responsiveHeader.length === attr.item[1]?.length) {
				attr.elem.push(
					new tbody({
						divider: attr.item.length > 1,
						elem: attr.item.slice(attr.item.length > 1 ? 1 : 0).map((i) => {
							return new tr({
								elem: i.map((j, jx) => {
									return new td(
										{
											responsiveAttr: attr.responsiveAttr,
											responsiveTitle: responsiveHeader[jx],
										},
										new div(j)
									);
								}),
							});
						}),
					})
				);
			} else {
				attr.responsiveAttr = undefined;
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
		}

		attr.class = mergeClass(attr.class, [
			"table",
			attr.color ? `table-${attr.color}` : undefined,
			attr.striped ? (attr.striped === "row" ? "table-striped" : "table-striped-columns") : undefined,
			attr.hoverable ? "table-hover" : undefined,
			attr.bordered !== undefined ? (attr.bordered === true ? "table-bordered" : "table-borderless") : undefined,
			attr.small ? "table-sm" : undefined,
			attr.captionLocation === "top" ? "caption-top" : undefined,
		]);

		if (attr.responsiveAttr || attr.responsiveCol || attr.responsiveColXs) {
			attr = mergeObject(
				{
					data: { "bs-responsive-title": attr.responsiveAttr },
					style: {
						"--bs-responsive-columns": attr.responsiveCol,
						"--bs-responsive-columns-xs": attr.responsiveColXs,
					},
				},
				attr
			);
		}

		delete attr.responsiveHeader;
		delete attr.responsiveAttr;
		delete attr.responsiveCol;
		delete attr.responsiveColXs;

		delete attr.color;
		delete attr.striped;
		delete attr.hoverable;
		delete attr.bordered;
		delete attr.small;
		delete attr.captionLocation;

		delete attr.item;
		return super.convert(attr);
	}
}
