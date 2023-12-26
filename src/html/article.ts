import { tagConstructor, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

/**
 * article HTML element class which extends the tag class.
 *
 * The constructor accepts different combinations of elem and attr arguments to create the article element:
 *
 * - No arguments: creates empty article element.
 * - elem argument: creates article element with given elem child content.
 * - attr argument: creates article element with given attributes.
 * - elem and attr arguments: creates article with attributes and content.
 *
 * Usage:
 *
 * ```ts
 * const art = new article(); // empty
 *
 * const artWithContent = new article(div()); // with content
 *
 * const artWithAttrs = new article({id: "main"}); // with attributes
 *
 * const artWithBoth = new article({id: "main"}, div()); // with attributes and content
 * ```
 */
export class article extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("article", tagConstructor("elem", arg));
	}
}
