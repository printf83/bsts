import { isAttr } from "../../core/base/tag.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { IAttrTagUl, IElemTagUl, ul } from "../../ht/ul.js";

export interface IAttrBSNavbarItemcontainer extends IAttrTagUl {
	scroll?: boolean;
	scrollHeight?: string;
}

const convert = (attr: IAttrBSNavbarItemcontainer): IAttrTagUl => {
	attr = mergeObject(
		{
			class: ["navbar-nav", attr.scroll ? "navbar-nav-scroll" : ""],
			style: { "--bs-scroll-height": attr.scrollHeight },
		},
		attr
	);

	return attr;
};

export class itemcontainer extends ul {
	constructor(); //#1
	constructor(attr: IAttrBSNavbarItemcontainer); //#2
	constructor(elem: IElemTagUl); //#3
	constructor(attr: IAttrBSNavbarItemcontainer, elem: IElemTagUl); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSNavbarItemcontainer>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({}), arg[0]);
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(arg[0]), arg[1]);
		}
	}
}
