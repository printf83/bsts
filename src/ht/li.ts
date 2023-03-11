import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";

export interface IAttrTagLi extends IAttr {
	value?: string;
	inline?: boolean;
}

const convert = (attr: IAttrTagLi) => {
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
		super("li", convert(consProp<IAttrTagLi>("elem", arg)));
	}
}
