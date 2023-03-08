import { IAttr, IElem, isAttr, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";

export interface IAttrTagBlockquote extends IAttr {
	cite?: string;
}

const convert = (attr: IAttrTagBlockquote): IAttr => {
	attr.class = mergeClass(attr.class, "blockquote");
	return attr;
};

export class blockquote extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagBlockquote);
	constructor(attr: IAttrTagBlockquote, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("blockquote", convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrTagBlockquote>(arg[0])) {
				super("blockquote", convert(arg[0]));
			} else {
				super("blockquote", convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			super("blockquote", mergeObject({ elem: arg[1] }, arg[0]));
		}
	}
}
