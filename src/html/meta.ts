import { tagConstructorNoElement, tag, ConstructorArgs } from "../core/tag.js";
import { meta as Meta } from "../interface/html/meta.js";

export class meta extends tag {
	constructor();
	constructor(attr: Meta);
	constructor(...arg: ConstructorArgs<Meta>) {
		super("meta", tagConstructorNoElement<Meta>(arg));
	}
}
