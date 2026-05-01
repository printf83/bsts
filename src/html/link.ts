import { tagConstructorNoElement, tag, ConstructorArgsNoElement } from "../core/tag.js";
import { link as Link } from "../interface/html/link.js";

export class link extends tag {
	constructor();
	constructor(attr: Link);
	constructor(...arg: ConstructorArgsNoElement<Link>) {
		super("link", tagConstructorNoElement<Link>(arg));
	}
}
