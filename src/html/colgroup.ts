import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { colgroup as Colgroup } from "../interface/html/colgroup.js";

export class colgroup extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Colgroup);
	constructor(attr: Colgroup, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("colgroup", tagConstructor<Colgroup>("elem", arg));
	}
}
