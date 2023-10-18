import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { q as Q } from "../interface/html/q.js";

export class q extends tag {
	constructor();
	constructor(elem: elem);
	constructor(attr: Q);
	constructor(attr: Q, elem: elem);
	constructor(...arg: any[]) {
		super("q", tagConsArg<Q>("elem", arg));
	}
}
