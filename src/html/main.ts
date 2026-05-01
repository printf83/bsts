import { tagConstructor, tag, tagConstructorArgs } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

export class main extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: tagConstructorArgs<attr>) {
		super("main", tagConstructor("elem", arg));
	}
}
