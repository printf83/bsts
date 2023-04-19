import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagBdo extends IAttr {
	dir?: "ltr" | "rtl";
}

export class bdo extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagBdo);
	constructor(attr: ITagBdo, elem: IElem);
	constructor(...arg: any[]) {
		super("bdo", tagConsArg<ITagBdo>("elem", arg));
	}
}

export const Bdo = (AttrOrElem: IAttr | IElem, Elem?: IElem) => genTagClass<bdo, IAttr>(bdo, AttrOrElem, Elem);
