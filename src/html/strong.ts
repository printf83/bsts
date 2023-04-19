import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class strong extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("strong", tagConsArg("elem", arg));
	}
}

export const Strong = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<strong, IAttr>(strong, AttrOrElem, Elem);
