import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class figure extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("figure", tagConsArg("elem", arg));
	}
}

export const Figure = (AttrOrElem: IAttr | IElem, Elem?: IElem) => genTagClass<figure, IAttr>(figure, AttrOrElem, Elem);
