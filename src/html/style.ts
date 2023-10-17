import { tagConsArg, tag } from "../core/tag.js";
import { style as Style } from "../interface/html/style.js";

export class style extends tag {
	constructor();
	constructor(elem: string);
	constructor(attr: Style);
	constructor(attr: Style, elem: string);
	constructor(...arg: any[]) {
		super("style", tagConsArg<Style>("elem", arg));
	}
}
