import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class sub extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("sub", tagConsArg("elem", arg));
	}
}

export const Sub = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<sub, IAttr>(sub, AttrOrElem, Elem);
