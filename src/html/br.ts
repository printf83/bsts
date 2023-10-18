import { tagConsNoElemArg, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";

export class br extends tag {
	constructor();
	constructor(attr: attr);
	constructor(...arg: any[]) {
		super("br", tagConsNoElemArg(arg));
	}
}
