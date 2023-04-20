import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class dfn extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("dfn", tagConsArg("elem", arg));
	}
}

export const Dfn = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<dfn, IAttr>(dfn, AttrOrElem, Elem);
