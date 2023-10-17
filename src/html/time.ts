import { tagConsArg, IElem, tag } from "../core/tag.js";
import { time as Time } from "../interface/html/time.js";

export class time extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Time);
	constructor(attr: Time, elem: IElem);
	constructor(...arg: any[]) {
		super("time", tagConsArg<Time>("elem", arg));
	}
}
