import { tagConstructor, tag, ConstructorArgs } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

export class tfoot extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: ConstructorArgs<elem>) {
		super("tfoot", tagConstructor("elem", arg));
	}
}
