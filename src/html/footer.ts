import { tagConstructor, tag, ConstructorArgs } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

export class footer extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: ConstructorArgs<attr>) {
		super("footer", tagConstructor("elem", arg));
	}
}
