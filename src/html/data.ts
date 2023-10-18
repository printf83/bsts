import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { data as Data } from "../interface/html/data.js";

export class data extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Data);
	constructor(attr: Data, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("data", tagConsArg<Data>("elem", arg));
	}
}
