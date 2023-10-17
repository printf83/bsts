import { tagConsArg, IElem, tag } from "../core/tag.js";
import { data as Data } from "../interface/html/data.js";

export class data extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Data);
	constructor(attr: Data, elem: IElem);
	constructor(...arg: any[]) {
		super("data", tagConsArg<Data>("elem", arg));
	}
}
