import { isAttr } from "../../../core/base/tag.js";
import { mergeClass } from "../../../core/fn/mergeClass.js";
import { IAttrTagUl, IElemTagUl, ul } from "../../../ht/ul.js";

export interface IAttrBSCardListGroup extends IAttrTagUl {
	flush?: true;
}

const convert = (attr: IAttrBSCardListGroup): IAttrTagUl => {
	attr.class = mergeClass(attr.class, "list-group");

	delete attr.flush;

	return attr;
};

export class group extends ul {
	constructor(); //#1
	constructor(attr: IAttrBSCardListGroup); //#2
	constructor(elem: IElemTagUl); //#3
	constructor(attr: IAttrBSCardListGroup, elem: IElemTagUl); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrTagUl>(arg[0])) {
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
