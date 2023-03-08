import { IAttr, IElem, isAttr, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";

export interface IAttrTagAbbr extends IAttr {
	small?: boolean;
}

const convert = (attr: IAttrTagAbbr): IAttr => {
	attr.class = mergeClass(attr.class, attr.small ? "initialism" : "");
	delete attr.small;
	return attr;
};

export class abbr extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagAbbr);
	constructor(attr: IAttrTagAbbr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("abbr", convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrTagAbbr>(arg[0])) {
				super("abbr", convert(arg[0]));
			} else {
				super("abbr", convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			super("abbr", mergeObject({ elem: arg[1] }, arg[0]));
		}
	}
}
