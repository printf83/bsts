import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class s extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("s", tagConsArg("elem", arg));
	}
}

export const S = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<s, IAttr>(s, AttrOrElem, Elem);
