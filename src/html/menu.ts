import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class menu extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("menu", tagConsArg("elem", arg));
	}
}

export const Menu = (AttrOrElem: IAttr | IElem, Elem?: IElem) => genTagClass<menu, IAttr>(menu, AttrOrElem, Elem);
