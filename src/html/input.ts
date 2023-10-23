import { tagConstructorNoElement, tag } from "../core/tag.js";
import { input as Input } from "../interface/html/input.js";

export class input extends tag {
	constructor();
	constructor(attr: Input);
	constructor(...arg: any[]) {
		super("input", tagConstructorNoElement<Input>(arg));
	}
}
