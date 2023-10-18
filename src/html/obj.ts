import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { obj as Obj } from "../interface/html/obj.js";

export class obj extends tag {
	constructor();
	constructor(elem: elem);
	constructor(attr: Obj);
	constructor(attr: Obj, elem: elem);
	constructor(...arg: any[]) {
		super("object", tagConsArg<Obj>("elem", arg));
	}
}
