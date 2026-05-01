import { tagConstructor, tag, tagConstructorArgs } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { th as Th } from "../interface/html/th.js";

export class th extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Th);
	constructor(attr: Th, elem: elem | elem[]);
	constructor(...arg: tagConstructorArgs<Th>) {
		super("th", tagConstructor<Th>("elem", arg));
	}
}
