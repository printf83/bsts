import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Colgroup extends IAttr {
	span?: number;
}

export class colgroup extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Colgroup);
	constructor(attr: Colgroup, elem: IElem);
	constructor(...arg: any[]) {
		super("colgroup", tagConsArg<Colgroup>("elem", arg));
	}
}

export const Colgroup = (AttrOrElem?: Colgroup | IElem, Elem?: IElem) =>
	genTagClass<colgroup, Colgroup>(colgroup, AttrOrElem, Elem);
