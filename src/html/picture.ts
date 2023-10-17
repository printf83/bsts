import { tagConsArg, IElem, tag } from "../core/tag.js";
import { picture as Picture } from "../interface/html/picture.js";

export class picture extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Picture);
	constructor(attr: Picture, elem: IElem);
	constructor(...arg: any[]) {
		super("picture", tagConsArg<Picture>("elem", arg));
	}
}
