import { tagConstructor, tag, ConstructorArgs } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { output as Output } from "../interface/html/output.js";

export class output extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Output);
	constructor(attr: Output, elem: elem | elem[]);
	constructor(...arg: ConstructorArgs<Output>) {
		super("output", tagConstructor<Output>("elem", arg));
	}
}
