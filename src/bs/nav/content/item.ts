import { IAttr, IElem, isAttr } from "../../../core/base/tag.js";
import { mergeClass } from "../../../core/fn/mergeClass.js";
import { div } from "../../../ht/div.js";

export interface IAttrBSNavContentItem extends IAttr {
	active?: boolean;
	role?: "tabpanel";
	labelledby?: string;
	tabindex?: string;
	animation?: boolean;
}

const convert = (attr: IAttrBSNavContentItem): IAttr => {
	attr.role = attr.role || "tabpanel";
	attr.tabindex = attr.tabindex || "0";
	attr.animation = attr.animation || true;

	attr.class = mergeClass(attr.class, [
		"tab-pane",
		attr.active ? "active" : "",
		attr.active ? "show" : "",
		attr.animation ? "fade" : "",
	]);

	delete attr.active;

	return attr;
};

export class item extends div {
	constructor(); //#1
	constructor(attr: IAttrBSNavContentItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavContentItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSNavContentItem>(arg[0])) {
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
