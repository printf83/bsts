import { tagConstructor, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

export class h6 extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("h6", tagConstructor("elem", arg));
	}
}
