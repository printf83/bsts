import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class cite extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("cite", tagConsArg("elem", arg));
	}
}

export const Cite = (AttrOrElem: IAttr | IElem, Elem?: IElem) => genTagClass<cite, IAttr>(cite, AttrOrElem, Elem);
