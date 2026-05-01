import { tagConstructorNoElement, tag, ConstructorArgs } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";

export class hr extends tag {
	constructor();
	constructor(attr: attr);
	constructor(...arg: ConstructorArgs<attr>) {
		super("hr", tagConstructorNoElement<attr>(arg));
	}
}
