import { tagConstructor, tag, ConstructorArgs } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { progress as Progress } from "../interface/html/progress.js";

export class progress extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Progress);
	constructor(attr: Progress, elem: elem | elem[]);
	constructor(...arg: ConstructorArgs<Progress>) {
		super("progress", tagConstructor<Progress>("elem", arg));
	}
}
