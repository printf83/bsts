import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { meter as Meter } from "../interface/html/meter.js";

export class meter extends tag {
	constructor();
	constructor(elem: elem);
	constructor(attr: Meter);
	constructor(attr: Meter, elem: elem);
	constructor(...arg: any[]) {
		super("meter", tagConsArg<Meter>("elem", arg));
	}
}
