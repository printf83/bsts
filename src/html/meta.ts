import { tagConstructorNoElement, tag } from "../core/tag.js";
import { meta as Meta } from "../interface/html/meta.js";

export class meta extends tag {
	constructor();
	constructor(attr: Meta);
	constructor(...arg: any[]) {
		super("meta", tagConstructorNoElement<Meta>(arg));
	}
}
