import { tagConsArg, IElem, tag } from "../core/tag.js";
import { details as Details } from "../interface/html/details.js";

export class details extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Details);
	constructor(attr: Details, elem: IElem);
	constructor(...arg: any[]) {
		super("details", tagConsArg<Details>("elem", arg));
	}
}
