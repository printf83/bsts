import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { blockquote as Blockquote } from "../interface/html/blockquote.js";

/**
 * Extends the tag class to create a blockquote element.
 * Allows initializing a blockquote with content and attributes.
 */
export class blockquote extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Blockquote);
	constructor(attr: Blockquote, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("blockquote", tagConstructor<Blockquote>("elem", arg));
	}
}
