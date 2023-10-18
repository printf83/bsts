import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { th as Th } from "../interface/html/th.js";

export class th extends tag {
	constructor();
	constructor(elem: elem);
	constructor(attr: Th);
	constructor(attr: Th, elem: elem);
	constructor(...arg: any[]) {
		super("th", tagConsArg<Th>("elem", arg));
	}
}
