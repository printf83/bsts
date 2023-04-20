import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class bdi extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("bdi", tagConsArg("elem", arg));
	}
}

export const Bdi = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<bdi, IAttr>(bdi, AttrOrElem, Elem);
