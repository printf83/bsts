import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class variable extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("var", tagConsArg("elem", arg));
	}
}

export const Variable = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<variable, IAttr>(variable, AttrOrElem, Elem);
