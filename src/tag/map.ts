import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagMap extends IAttr {
	name?: string;
}

export class map extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagMap);
	constructor(attr: IAttrTagMap, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("map");
		} else if (arg.length === 1) {
			super("map", arg[0]);
		} else if (arg.length === 2) {
			super("map", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagMap[]) => attrs.map((i) => new map(i));
}
