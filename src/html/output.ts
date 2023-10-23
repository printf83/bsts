import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { output as Output } from "../interface/html/output.js";

export class output extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Output);
	constructor(attr: Output, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("output", tagConstructor<Output>("elem", arg));
	}
}
