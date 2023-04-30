import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Map extends IAttr {
	name?: string;
}

export class map extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Map);
	constructor(attr: Map, elem: IElem);
	constructor(...arg: any[]) {
		super("map", tagConsArg<Map>("elem", arg));
	}
}

export const Map = (AttrOrElem?: Map | IElem, Elem?: IElem) => genTagClass<map, Map>(map, AttrOrElem, Elem);
