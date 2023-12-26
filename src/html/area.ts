import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { area as Area } from "../interface/html/area.js";

/**
 * Exports a class `area` that extends the `tag` class.
 *
 * The `area` class is used to create HTML `<area>` elements.
 *
 * The constructor accepts different combinations of arguments to initialize the element:
 *
 * - No arguments: Creates an empty `<area>` element
 * - `elem` parameter: Creates an `<area>` element with nested content
 * - `attr` parameter: Creates an `<area>` element with attributes
 * - `attr` and `elem` parameters: Creates an `<area>` element with attributes and nested content
 *
 * The constructor handles passing these arguments to the `super` call which creates the element.
 */
export class area extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Area);
	constructor(attr: Area, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("area", tagConstructor<Area>("elem", arg));
	}
}
