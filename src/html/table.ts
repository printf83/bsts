import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class table extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("table", tagConsArg("elem", arg));
	}
}

export const Table = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<table, IAttr>(table, AttrOrElem, Elem);
