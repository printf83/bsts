import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { button as Button } from "../interface/html/button.js";

/**
 * Exports a Button class that extends the Tag class.
 * This allows creating button elements with additional methods and properties beyond the standard Tag.
 */
export class button extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Button);
	constructor(attr: Button, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("button", tagConstructor<Button>("elem", arg));
	}
}
