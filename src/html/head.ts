import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class head extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("head", tagConsArg("elem", arg));
	}
}

export const Head = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<head, IAttr>(head, AttrOrElem, Elem);
