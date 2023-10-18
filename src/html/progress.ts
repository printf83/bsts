import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { progress as Progress } from "../interface/html/progress.js";

export class progress extends tag {
	constructor();
	constructor(elem: elem);
	constructor(attr: Progress);
	constructor(attr: Progress, elem: elem);
	constructor(...arg: any[]) {
		super("progress", tagConsArg<Progress>("elem", arg));
	}
}
