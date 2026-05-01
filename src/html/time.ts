import { tagConstructor, tag, tagConstructorArgs } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { time as Time } from "../interface/html/time.js";

export class time extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Time);
	constructor(attr: Time, elem: elem | elem[]);
	constructor(...arg: tagConstructorArgs<Time>) {
		super("time", tagConstructor<Time>("elem", arg));
	}
}
