import { tagConstructorNoElement, tag, tagConstructorArgsNoElement } from "../core/tag.js";
import { source as Source } from "../interface/html/source.js";

export class source extends tag {
	constructor();
	constructor(attr: Source);
	constructor(...arg: tagConstructorArgsNoElement<Source>) {
		super("source", tagConstructorNoElement<Source>(arg));
	}
}
