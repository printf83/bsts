import { tagConstructor, tag, ConstructorArgs } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { meter as Meter } from "../interface/html/meter.js";

export class meter extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Meter);
	constructor(attr: Meter, elem: elem | elem[]);
	constructor(...arg: ConstructorArgs<Meter>) {
		super("meter", tagConstructor<Meter>("elem", arg));
	}
}
