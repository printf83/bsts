import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagMap extends IAttr {
	name?: string;
}

export class map extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagMap);
	constructor(attr: ITagMap, elem: IElem);
	constructor(...arg: any[]) {
		super("map", tagConsArg<ITagMap>("elem", arg));
	}
}

export const Map = (AttrOrElem?: ITagMap | IElem, Elem?: IElem) => genTagClass<map, ITagMap>(map, AttrOrElem, Elem);
