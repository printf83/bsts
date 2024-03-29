import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { bdo as Bdo } from "../interface/html/bdo.js";

/**
 * bdo class, extends tag class
 * Constructor overloads to create a bdo element with various configurations of attributes and child elements
 */
export class bdo extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Bdo);
	constructor(attr: Bdo, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("bdo", tagConstructor<Bdo>("elem", arg));
	}
}
