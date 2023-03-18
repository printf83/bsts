import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { nav } from "../../html/nav.js";
import { ol } from "../../html/ol.js";

export interface IAttrBSBreadcrumbContainer extends IAttr {
	divider?: string;
}

const convert = (attr: IAttrBSBreadcrumbContainer) => {
	attr = mergeObject(
		{
			style: {
				"--bs-breadcrumb-divider": attr.divider ? attr.divider : undefined,
			},
		},
		attr
	);

	if (attr.elem) {
		attr.elem = new ol(
			{
				class: "breadcrumb",
			},
			attr.elem
		);
	} else {
		attr.elem = new ol({
			class: "breadcrumb",
		});
	}

	delete attr.label;

	return attr;
};

export class container extends nav {
	constructor(); //#1
	constructor(attr: IAttrBSBreadcrumbContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSBreadcrumbContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSBreadcrumbContainer>("elem", convert, arg));
	}
}
