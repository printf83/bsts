import { tagConsArg, IElem, tag } from "../core/tag.js";
import { q as Q } from "../interface/html/q.js";

export class q extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Q);
	constructor(attr: Q, elem: IElem);
	constructor(...arg: any[]) {
		super("q", tagConsArg<Q>("elem", arg));
	}
}
