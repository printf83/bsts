import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { q as Q } from "../interface/html/q.js";

export class q extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Q);
	constructor(attr: Q, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("q", tagConstructor<Q>("elem", arg));
	}
}
