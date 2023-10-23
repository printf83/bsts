import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { area as Area } from "../interface/html/area.js";

export class area extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Area);
	constructor(attr: Area, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("area", tagConstructor<Area>("elem", arg));
	}
}
