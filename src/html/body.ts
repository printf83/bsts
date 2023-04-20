import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class body extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("body", tagConsArg("elem", arg));
	}
}

export const Body = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<body, IAttr>(body, AttrOrElem, Elem);
