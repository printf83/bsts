import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { td as Td } from "../interface/html/td.js";

export class td extends tag {
	constructor();
	constructor(elem: elem);
	constructor(attr: Td);
	constructor(attr: Td, elem: elem);
	constructor(...arg: any[]) {
		super("td", tagConsArg<Td>("elem", arg));
	}
}
