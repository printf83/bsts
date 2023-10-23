import { tagConstructorNoElement, tag } from "../core/tag.js";
import { iframe as Iframe } from "../interface/html/iframe.js";

export class iframe extends tag {
	constructor();
	constructor(attr: Iframe);
	constructor(...arg: any[]) {
		super("iframe", tagConstructorNoElement<Iframe>(arg));
	}
}
