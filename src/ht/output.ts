import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagOutput extends IAttr {
	for?: string;
	from?: string;
	name?: string;
}

export class output extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagOutput);
	constructor(attr: IAttrTagOutput, elem: IElem);
	constructor(...arg: any[]) {
		super("output", tagConsArg<IAttrTagOutput>("elem", arg));
	}
}
