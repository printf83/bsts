import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";

export interface IAttrTagAbbr extends IAttr {
	small?: boolean;
}

const convert = (attr: IAttrTagAbbr) => {
	attr.class = mergeClass(attr.class, attr.small ? "initialism" : undefined);
	delete attr.small;
	return attr;
};

export class abbr extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagAbbr);
	constructor(attr: IAttrTagAbbr, elem: IElem);
	constructor(...arg: any[]) {
		super("abbr", convert(tagConsArg<IAttrTagAbbr>("elem", arg)));
	}
}
