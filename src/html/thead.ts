import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class thead extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("thead", tagConsArg("elem", arg));
	}
}

export const Thead = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<thead, IAttr>(thead, AttrOrElem, Elem);
