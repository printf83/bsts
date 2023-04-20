import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class span extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("span", tagConsArg("elem", arg));
	}
}

export const Span = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<span, IAttr>(span, AttrOrElem, Elem);
