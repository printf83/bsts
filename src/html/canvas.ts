import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class canvas extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("canvas", tagConsArg("elem", arg));
	}
}

export const Canvas = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<canvas, IAttr>(canvas, AttrOrElem, Elem);
