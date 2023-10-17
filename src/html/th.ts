import { tagConsArg, IElem, tag } from "../core/tag.js";
import { th as Th } from "../interface/html/th.js";

export class th extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Th);
	constructor(attr: Th, elem: IElem);
	constructor(...arg: any[]) {
		super("th", tagConsArg<Th>("elem", arg));
	}
}
