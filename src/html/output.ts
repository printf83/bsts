import { tagConsArg, IElem, tag } from "../core/tag.js";
import { output as Output } from "../interface/html/output.js";

export class output extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Output);
	constructor(attr: Output, elem: IElem);
	constructor(...arg: any[]) {
		super("output", tagConsArg<Output>("elem", arg));
	}
}
