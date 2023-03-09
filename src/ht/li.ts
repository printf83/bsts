import { IAttr, IElem, isAttr, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";

export interface IAttrTagLi extends IAttr {
	value?: string;
	inline?: boolean;
}

const convert = (attr: IAttrTagLi): IAttr => {
	attr.class = mergeClass(attr.class, [attr.inline ? "list-inline-item" : ""]);

	delete attr.inline;

	return attr;
};

export class li extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagLi);
	constructor(attr: IAttrTagLi, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("li", convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrTagLi>(arg[0])) {
				super("li", convert(arg[0]));
			} else {
				super("li", convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			super("li", mergeObject({ elem: arg[1] }, arg[0]));
		}
	}
}
