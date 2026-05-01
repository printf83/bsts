import { tagConstructorNoElement, tag, ConstructorArgs } from "../core/tag.js";
import { script as Script } from "../interface/html/script.js";

export class script extends tag {
	constructor();
	constructor(attr: Script);
	constructor(...arg: ConstructorArgs<Script>) {
		super("script", tagConstructorNoElement<Script>(arg));
	}
}
