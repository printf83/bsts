import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";

export interface ITagAbbr extends IAttr {
	small?: true;
}

const convert = (attr: ITagAbbr) => {
	attr.class = mergeClass(attr.class, attr.small ? "initialism" : undefined);
	delete attr.small;
	return attr;
};

export class abbr extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagAbbr);
	constructor(attr: ITagAbbr, elem: IElem);
	constructor(...arg: any[]) {
		super("abbr", convert(tagConsArg<ITagAbbr>("elem", arg)));
	}
}

export const Abbr = (AttrOrElem?: ITagAbbr | IElem, Elem?: IElem) =>
	genTagClass<abbr, ITagAbbr>(abbr, AttrOrElem, Elem);
