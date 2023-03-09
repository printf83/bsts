import { consNoElem, IAttr, tag } from "../core/base/tag.js";

export class hr extends tag {
	constructor();
	constructor(attr: IAttr);
	constructor(...arg: any[]) {
		super("hr", consNoElem<IAttr>(arg));
	}
}
