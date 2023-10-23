import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { picture as Picture } from "../interface/html/picture.js";

export class picture extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Picture);
	constructor(attr: Picture, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("picture", tagConstructor<Picture>("elem", arg));
	}
}
