import { tagConstructorNoElement, tag, ConstructorArgs } from "../core/tag.js";
import { iframe as Iframe } from "../interface/html/iframe.js";

export class iframe extends tag {
	constructor();
	constructor(attr: Iframe);
	constructor(...arg: ConstructorArgs<Iframe>) {
		super("iframe", tagConstructorNoElement<Iframe>(arg));
	}
}
