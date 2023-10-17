import { tagConsArg, IElem, tag } from "../core/tag.js";
import { meter as Meter } from "../interface/html/meter.js";

export class meter extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Meter);
	constructor(attr: Meter, elem: IElem);
	constructor(...arg: any[]) {
		super("meter", tagConsArg<Meter>("elem", arg));
	}
}
