import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagProgress extends IAttr {
	max?: number;
	value?: number;
}

export class progress extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagProgress);
	constructor(attr: IAttrTagProgress, elem: IElem);
	constructor(...arg: any[]) {
		super("progress", consProp<IAttrTagProgress>("elem", arg));
	}
}
