import { tagConstructor, tag, ConstructorArgs } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { td as Td } from "../interface/html/td.js";

export class td extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Td);
	constructor(attr: Td, elem: elem | elem[]);
	constructor(...arg: ConstructorArgs<Td>) {
		super("td", tagConstructor<Td>("elem", arg));
	}
}
