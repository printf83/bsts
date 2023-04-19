import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class summary extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("summary", tagConsArg("elem", arg));
	}
}

export const Summary = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<summary, IAttr>(summary, AttrOrElem, Elem);
