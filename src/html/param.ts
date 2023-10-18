import { tagConsNoElemArg, tag } from "../core/tag.js";
import { param as Param } from "../interface/html/param.js";

export class param extends tag {
	constructor();
	constructor(attr: Param);
	constructor(...arg: any[]) {
		super("param", tagConsNoElemArg<Param>(arg));
	}
}
