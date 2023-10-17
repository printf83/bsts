import { tagConsArg, IElem, tag } from "../core/tag.js";
import { obj as Obj } from "../interface/html/obj.js";

export class obj extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Obj);
	constructor(attr: Obj, elem: IElem);
	constructor(...arg: any[]) {
		super("object", tagConsArg<Obj>("elem", arg));
	}
}
