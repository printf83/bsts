import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class section extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("section", tagConsArg("elem", arg));
	}
}

export const Section = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<section, IAttr>(section, AttrOrElem, Elem);
