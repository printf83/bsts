import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { UUID } from "../../core/fn/uuid.js";
import { div } from "../../ht/div.js";

export interface IAttrBSCollapseContainer extends IAttr {
	horizontal?: true;
}

const convert = (attr: IAttrBSCollapseContainer): IAttr => {
	attr.id = attr.id || UUID();
	attr.class = mergeClass(attr.class, [
		"collapse",
		attr.horizontal ? "collapse-horizontal" : "",
	]);

	delete attr.horizontal;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSCollapseContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCollapseContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSCollapseContainer>(arg[0])) {
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
