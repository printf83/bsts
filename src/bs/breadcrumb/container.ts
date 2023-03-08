import { IAttr, isAttr } from "../../core/base/tag.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { nav } from "../../ht/nav.js";
import { IElemTagOl, ol } from "../../ht/ol.js";

export interface IAttrBSBreadcrumbContainer extends IAttr {
	label?: string;
	divider?: string;
	elem?: IElemTagOl;
}

const convert = (attr: IAttrBSBreadcrumbContainer): IAttr => {
	attr = mergeObject(
		{
			aria: { label: attr.label },
			style: {
				"--bs-breadcrumb-divider": attr.divider
					? attr.divider
					: undefined,
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
	constructor(elem: IElemTagOl); //#3
	constructor(attr: IAttrBSBreadcrumbContainer, elem: IElemTagOl); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSBreadcrumbContainer>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}
}
