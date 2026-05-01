import { tagConstructorNoElement, tag, ConstructorArgs } from "../core/tag.js";
import { source as Source } from "../interface/html/source.js";

export class source extends tag {
	constructor();
	constructor(attr: Source);
	constructor(...arg: ConstructorArgs<Source>) {
		super("source", tagConstructorNoElement<Source>(arg));
	}
}
