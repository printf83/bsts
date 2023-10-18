import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { option as Option } from "../interface/html/option.js";

export class option extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Option);
	constructor(attr: Option, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("option", tagConsArg<Option>("elem", arg));
	}
}
