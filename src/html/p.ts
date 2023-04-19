import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";

export interface ITagP extends IAttr {
	lead?: boolean;
}

const convert = (attr: ITagP) => {
	attr.class = mergeClass(attr.class, attr.lead ? "lead" : undefined);
	delete attr.lead;
	return attr;
};

export class p extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagP);
	constructor(attr: ITagP, elem: IElem);
	constructor(...arg: any[]) {
		super("p", convert(tagConsArg<ITagP>("elem", arg)));
	}
}
