import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class figcaption extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("figcaption", tagConsArg("elem", arg));
	}
}

export const Figcaption = (AttrOrElem: IAttr | IElem, Elem?: IElem) =>
	genTagClass<figcaption, IAttr>(figcaption, AttrOrElem, Elem);
