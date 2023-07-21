import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Output extends IAttr {
	for?: string;
	from?: string;
	name?: string;
}

export class output extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Output);
	constructor(attr: Output, elem: IElem);
	constructor(...arg: any[]) {
		super("output", tagConsArg<Output>("elem", arg));
	}
}
