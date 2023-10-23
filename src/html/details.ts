import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { details as Details } from "../interface/html/details.js";

export class details extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Details);
	constructor(attr: Details, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("details", tagConstructor<Details>("elem", arg));
	}
}
