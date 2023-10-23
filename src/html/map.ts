import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { map as Map } from "../interface/html/map.js";

export class map extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Map);
	constructor(attr: Map, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("map", tagConstructor<Map>("elem", arg));
	}
}
