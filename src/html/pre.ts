import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class pre extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("pre", tagConsArg("elem", arg));
	}
}

export const Pre = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<pre, IAttr>(pre, AttrOrElem, Elem);
