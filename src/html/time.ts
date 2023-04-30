import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Time extends IAttr {
	datetime?: Date;
}

export class time extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Time);
	constructor(attr: Time, elem: IElem);
	constructor(...arg: any[]) {
		super("time", tagConsArg<Time>("elem", arg));
	}
}

export const Time = (AttrOrElem?: Time | IElem, Elem?: IElem) => genTagClass<time, Time>(time, AttrOrElem, Elem);
