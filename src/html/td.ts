import { tagConsArg, IElem, tag } from "../core/tag.js";
import { td as Td } from "../interface/html/td.js";

export class td extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Td);
	constructor(attr: Td, elem: IElem);
	constructor(...arg: any[]) {
		super("td", tagConsArg<Td>("elem", arg));
	}
}
