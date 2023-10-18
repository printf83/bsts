import { tagConsNoElemArg, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";

export class hr extends tag {
	constructor();
	constructor(attr: attr);
	constructor(...arg: any[]) {
		super("hr", tagConsNoElemArg<attr>(arg));
	}
}
