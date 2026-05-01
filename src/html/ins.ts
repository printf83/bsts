import { tagConstructor, tag, tagConstructorArgs } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { ins as Ins } from "../interface/html/ins.js";

export class ins extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Ins);
	constructor(attr: Ins, elem: elem | elem[]);
	constructor(...arg: tagConstructorArgs<Ins>) {
		super("ins", tagConstructor<Ins>("elem", arg));
	}
}
