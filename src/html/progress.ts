import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagProgress extends IAttr {
	max?: number;
	value?: number;
}

export class progress extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagProgress);
	constructor(attr: ITagProgress, elem: IElem);
	constructor(...arg: any[]) {
		super("progress", tagConsArg<ITagProgress>("elem", arg));
	}
}
