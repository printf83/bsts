import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";

export interface P extends IAttr {
	lead?: boolean;
}

const convert = (attr: P) => {
	attr.class = mergeClass(attr.class, attr.lead ? "lead" : undefined);
	delete attr.lead;
	return attr;
};

export class p extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: P);
	constructor(attr: P, elem: IElem);
	constructor(...arg: any[]) {
		super("p", convert(tagConsArg<P>("elem", arg)));
	}
}
