import { tagConsNoElemArg, tag } from "../core/tag.js";
import { img as Img } from "../interface/html/img.js";

export class img extends tag {
	constructor();
	constructor(attr: Img);
	constructor(...arg: any[]) {
		super("img", tagConsNoElemArg<Img>(arg));
	}
}
