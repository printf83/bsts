import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";

export interface Abbr extends IAttr {
	small?: true;
}

const convert = (attr: Abbr) => {
	attr.class = mergeClass(attr.class, attr.small ? "initialism" : undefined);
	delete attr.small;
	return attr;
};

export class abbr extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Abbr);
	constructor(attr: Abbr, elem: IElem);
	constructor(...arg: any[]) {
		super("abbr", convert(tagConsArg<Abbr>("elem", arg)));
	}
}

export const Abbr = (AttrOrElem?: Abbr | IElem, Elem?: IElem) => genTagClass<abbr, Abbr>(abbr, AttrOrElem, Elem);
