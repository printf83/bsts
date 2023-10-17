import { tagConsArg, IElem, tag } from "../core/tag.js";
import { option as Option } from "../interface/html/option.js";

export class option extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Option);
	constructor(attr: Option, elem: IElem);
	constructor(...arg: any[]) {
		super("option", tagConsArg<Option>("elem", arg));
	}
}
