import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { ins as Ins } from "../interface/html/ins.js";

export class ins extends tag {
	constructor();
	constructor(elem: elem);
	constructor(attr: Ins);
	constructor(attr: Ins, elem: elem);
	constructor(...arg: any[]) {
		super("ins", tagConsArg<Ins>("elem", arg));
	}
}
