import { tagConsNoElemArg, IAttr, tag } from "../core/base/tag.js";

export class hr extends tag {
	constructor();
	constructor(attr: IAttr);
	constructor(...arg: any[]) {
		super("hr", tagConsNoElemArg<IAttr>(arg));
	}
}
