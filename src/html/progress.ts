import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Progress extends IAttr {
	max?: number;
	value?: number;
}

export class progress extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Progress);
	constructor(attr: Progress, elem: IElem);
	constructor(...arg: any[]) {
		super("progress", tagConsArg<Progress>("elem", arg));
	}
}
