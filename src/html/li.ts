import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";

export interface ITagLi extends IAttr {
	value?: string;
	inline?: boolean;
}

const convert = (attr: ITagLi) => {
	attr.class = mergeClass(attr.class, [attr.inline ? "list-inline-item" : undefined]);

	delete attr.inline;

	return attr;
};

export class li extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagLi);
	constructor(attr: ITagLi, elem: IElem);
	constructor(...arg: any[]) {
		super("li", convert(tagConsArg<ITagLi>("elem", arg)));
	}
}
