import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class legend extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("legend", tagConsArg("elem", arg));
	}
}

export const Legend = (AttrOrElem: IAttr | IElem, Elem?: IElem) => genTagClass<legend, IAttr>(legend, AttrOrElem, Elem);
