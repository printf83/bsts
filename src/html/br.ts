import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

export class br extends tag {
	constructor();
	constructor(attr: IAttr);
	constructor(...arg: any[]) {
		super("br", tagConsNoElemArg(arg));
	}
}

export const Br = (Attr?: IAttr) => genTagClass<br, IAttr>(br, Attr);
