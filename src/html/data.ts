import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Data extends IAttr {
	value?: string;
}

export class data extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Data);
	constructor(attr: Data, elem: IElem);
	constructor(...arg: any[]) {
		super("data", tagConsArg<Data>("elem", arg));
	}
}
