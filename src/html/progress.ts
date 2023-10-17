import { tagConsArg, IElem, tag } from "../core/tag.js";
import { progress as Progress } from "../interface/html/progress.js";

export class progress extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Progress);
	constructor(attr: Progress, elem: IElem);
	constructor(...arg: any[]) {
		super("progress", tagConsArg<Progress>("elem", arg));
	}
}
