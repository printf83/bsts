import { tagConstructorNoElement, tag } from "../core/tag.js";
import { base as Base } from "../interface/html/base.js";

export class base extends tag {
	constructor();
	constructor(attr: Base);
	constructor(...arg: any[]) {
		super("base", tagConstructorNoElement<Base>(arg));
	}
}
