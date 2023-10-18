import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { picture as Picture } from "../interface/html/picture.js";

export class picture extends tag {
	constructor();
	constructor(elem: elem);
	constructor(attr: Picture);
	constructor(attr: Picture, elem: elem);
	constructor(...arg: any[]) {
		super("picture", tagConsArg<Picture>("elem", arg));
	}
}
