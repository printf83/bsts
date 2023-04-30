import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Obj extends IAttr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;
}

export class obj extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Obj);
	constructor(attr: Obj, elem: IElem);
	constructor(...arg: any[]) {
		super("object", tagConsArg<Obj>("elem", arg));
	}
}

export const Obj = (AttrOrElem?: Obj | IElem, Elem?: IElem) => genTagClass<obj, Obj>(obj, AttrOrElem, Elem);
