import { tagConstructorNoElement, tag } from "../core/tag.js";
import { col as Col } from "../interface/html/col.js";

/**
 * col class, extends tag class
 * Represents a col element in HTML
 */
export class col extends tag {
	constructor();
	constructor(attr: Col);
	constructor(...arg: any[]) {
		super("col", tagConstructorNoElement(arg));
	}
}
