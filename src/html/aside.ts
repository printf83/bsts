import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class aside extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("aside", tagConsArg("elem", arg));
	}
}
export const Aside = (AttrOrElem: IAttr | IElem, Elem?: IElem) => genTagClass<aside, IAttr>(aside, AttrOrElem, Elem);
