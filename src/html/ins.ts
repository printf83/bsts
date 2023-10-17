import { tagConsArg, IElem, tag } from "../core/tag.js";
import { ins as Ins } from "../interface/html/ins.js";

export class ins extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Ins);
	constructor(attr: Ins, elem: IElem);
	constructor(...arg: any[]) {
		super("ins", tagConsArg<Ins>("elem", arg));
	}
}
