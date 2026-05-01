import { tagConstructor, tag, tagConstructorArgs } from "../core/tag.js";
import { style as Style } from "../interface/html/style.js";

export class style extends tag {
	constructor();
	constructor(elem: string);
	constructor(attr: Style);
	constructor(attr: Style, elem: string);
	constructor(...arg: tagConstructorArgs<Style>) {
		super("style", tagConstructor<Style>("elem", arg));
	}
}
