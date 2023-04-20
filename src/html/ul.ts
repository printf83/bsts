import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { li } from "./li.js";

export interface ITagUl extends IAttr {
	unstyle?: boolean;
	inline?: boolean;
	item?: IElem;
}

const convert = (attr: ITagUl) => {
	attr.class = mergeClass(attr.class, [
		attr.unstyle ? "list-unstyled" : undefined,
		attr.inline ? "list-inline" : undefined,
	]);

	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new li(i);
		});
	}

	delete attr.unstyle;
	delete attr.inline;
	delete attr.item;

	return attr;
};

export class ul extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagUl);
	constructor(attr: ITagUl, elem: IElem);
	constructor(...arg: any[]) {
		super("ul", convert(tagConsArg<ITagUl>("elem", arg)));
	}
}

export const Ul = (AttrOrElem?: ITagUl | IElem, Elem?: IElem) => genTagClass<ul, ITagUl>(ul, AttrOrElem, Elem);
