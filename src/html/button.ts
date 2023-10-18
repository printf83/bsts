import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { button as Button } from "../interface/html/button.js";

export class button extends tag {
	constructor();
	constructor(elem: elem);
	constructor(attr: Button);
	constructor(attr: Button, elem: elem);
	constructor(...arg: any[]) {
		super("button", tagConsArg<Button>("elem", arg));
	}
}
