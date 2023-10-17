import { tagConsArg, IElem, tag } from "../core/tag.js";
import { area as Area } from "../interface/html/area.js";

export class area extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Area);
	constructor(attr: Area, elem: IElem);
	constructor(...arg: any[]) {
		super("area", tagConsArg<Area>("elem", arg));
	}
}
