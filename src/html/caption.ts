import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class caption extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("caption", tagConsArg("elem", arg));
	}
}

export const Caption = (AttrOrElem: IAttr | IElem, Elem?: IElem) =>
	genTagClass<caption, IAttr>(caption, AttrOrElem, Elem);
