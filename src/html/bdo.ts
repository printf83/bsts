import { tagConsArg, IElem, tag } from "../core/tag.js";
import { bdo as Bdo } from "../interface/html/bdo.js";

export class bdo extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Bdo);
	constructor(attr: Bdo, elem: IElem);
	constructor(...arg: any[]) {
		super("bdo", tagConsArg<Bdo>("elem", arg));
	}
}
