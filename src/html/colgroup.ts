import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { colgroup as Colgroup } from "../interface/html/colgroup.js";

/**
 * colgroup class, extends tag class
 * Constructor overloads to create a colgroup element with different initialization options:
 * - No parameters - empty colgroup element
 * - elem parameter - colgroup element with nested element(s)
 * - attr parameter - colgroup element with Colgroup attributes
 * - attr and elem parameters - colgroup element with attributes and nested element(s)
 */
export class colgroup extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Colgroup);
	constructor(attr: Colgroup, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("colgroup", tagConstructor<Colgroup>("elem", arg));
	}
}
