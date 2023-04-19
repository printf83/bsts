import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

export class hr extends tag {
	constructor();
	constructor(attr: IAttr);
	constructor(...arg: any[]) {
		super("hr", tagConsNoElemArg<IAttr>(arg));
	}
}

export const Hr = (Attr: IAttr) => genTagClass<hr, IAttr>(hr, Attr);
