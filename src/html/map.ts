import { tagConsArg, IElem, tag } from "../core/tag.js";
import { map as Map } from "../interface/html/map.js";

export class map extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Map);
	constructor(attr: Map, elem: IElem);
	constructor(...arg: any[]) {
		super("map", tagConsArg<Map>("elem", arg));
	}
}
