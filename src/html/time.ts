import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagTime extends IAttr {
	datetime?: Date;
}

export class time extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagTime);
	constructor(attr: ITagTime, elem: IElem);
	constructor(...arg: any[]) {
		super("time", tagConsArg<ITagTime>("elem", arg));
	}
}
