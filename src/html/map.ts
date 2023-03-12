import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagMap extends IAttr {
	name?: string;
}

export class map extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagMap);
	constructor(attr: IAttrTagMap, elem: IElem);
	constructor(...arg: any[]) {
		super("map", tagConsArg<IAttrTagMap>("elem", arg));
	}
}
