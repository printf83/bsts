import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { colgroup as Colgroup } from "../interface/html/colgroup.js";

export class colgroup extends tag {
	constructor();
	constructor(elem: elem);
	constructor(attr: Colgroup);
	constructor(attr: Colgroup, elem: elem);
	constructor(...arg: any[]) {
		super("colgroup", tagConsArg<Colgroup>("elem", arg));
	}
}
