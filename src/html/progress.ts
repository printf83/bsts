import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

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

export const Progress = (AttrOrElem?: Progress | IElem, Elem?: IElem) =>
	genTagClass<progress, Progress>(progress, AttrOrElem, Elem);
