import { tagConsNoElemArg, tag } from "../core/tag.js";
import { col as Col } from "../interface/html/col.js";

export class col extends tag {
	constructor();
	constructor(attr: Col);
	constructor(...arg: any[]) {
		super("col", tagConsNoElemArg(arg));
	}
}
