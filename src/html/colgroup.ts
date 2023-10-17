import { tagConsArg, IElem, tag } from "../core/tag.js";
import { colgroup as Colgroup } from "../interface/html/colgroup.js";

export class colgroup extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Colgroup);
	constructor(attr: Colgroup, elem: IElem);
	constructor(...arg: any[]) {
		super("colgroup", tagConsArg<Colgroup>("elem", arg));
	}
}
