import { tagConstructor, tag, tagConstructorArgs } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

export class footer extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: tagConstructorArgs<attr>) {
		super("footer", tagConstructor("elem", arg));
	}
}
