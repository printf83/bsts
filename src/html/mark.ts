import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class mark extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("mark", tagConsArg("elem", arg));
	}
}

export const Mark = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<mark, IAttr>(mark, AttrOrElem, Elem);
