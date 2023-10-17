import { tagConsArg, IElem, tag } from "../core/tag.js";
import { del as Del } from "../interface/html/del.js";

export class del extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Del);
	constructor(attr: Del, elem: IElem);
	constructor(...arg: any[]) {
		super("del", tagConsArg("elem", arg));
	}
}
