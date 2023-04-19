import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class div extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("div", tagConsArg("elem", arg));
	}
}

export const Div = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<div, IAttr>(div, AttrOrElem, Elem);
