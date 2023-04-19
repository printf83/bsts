import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class code extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("code", tagConsArg("elem", arg));
	}
}

export const Code = (AttrOrElem: IAttr | IElem, Elem?: IElem) => genTagClass<code, IAttr>(code, AttrOrElem, Elem);
