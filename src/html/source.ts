import { tagConsNoElemArg, tag } from "../core/tag.js";
import { source as Source } from "../interface/html/source.js";

export class source extends tag {
	constructor();
	constructor(attr: Source);
	constructor(...arg: any[]) {
		super("source", tagConsNoElemArg<Source>(arg));
	}
}
