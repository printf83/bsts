import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { data as Data } from "../interface/html/data.js";

/**
 * Exported data class that extends the tag class.
 * Allows creating a data tag with various constructor overloads.
 */
export class data extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Data);
	constructor(attr: Data, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("data", tagConstructor<Data>("elem", arg));
	}
}
