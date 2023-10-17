import { tagConsNoElemArg, tag } from "../core/tag.js";
import { script as Script } from "../interface/html/script.js";

export class script extends tag {
	constructor();
	constructor(attr: Script);
	constructor(...arg: any[]) {
		super("script", tagConsNoElemArg<Script>(arg));
	}
}
