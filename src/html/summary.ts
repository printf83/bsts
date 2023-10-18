import { tagConsArg, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

export class summary extends tag {
	constructor();
	constructor(elem: elem);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem);
	constructor(...arg: any[]) {
		super("summary", tagConsArg("elem", arg));
	}
}
