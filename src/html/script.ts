import { tagConstructorNoElement, tag, ConstructorArgsNoElement } from "../core/tag.js";
import { script as Script } from "../interface/html/script.js";

export class script extends tag {
	constructor();
	constructor(attr: Script);
	constructor(...arg: ConstructorArgsNoElement<Script>) {
		super("script", tagConstructorNoElement<Script>(arg));
	}
}
