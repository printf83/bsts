import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { del as Del } from "../interface/html/del.js";

export class del extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Del);
	constructor(attr: Del, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("del", tagConstructor("elem", arg));
	}
}
