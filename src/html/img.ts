import { tagConstructorNoElement, tag, tagConstructorArgsNoElement } from "../core/tag.js";
import { img as Img } from "../interface/html/img.js";

export class img extends tag {
	constructor();
	constructor(attr: Img);
	constructor(...arg: tagConstructorArgsNoElement<Img>) {
		super("img", tagConstructorNoElement<Img>(arg));
	}
}
