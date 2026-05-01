import { tagConstructorNoElement, tag, ConstructorArgsNoElement } from "../core/tag.js";
import { iframe as Iframe } from "../interface/html/iframe.js";

export class iframe extends tag {
	constructor();
	constructor(attr: Iframe);
	constructor(...arg: ConstructorArgsNoElement<Iframe>) {
		super("iframe", tagConstructorNoElement<Iframe>(arg));
	}
}
