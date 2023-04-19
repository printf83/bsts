import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagOutput extends IAttr {
	for?: string;
	from?: string;
	name?: string;
}

export class output extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagOutput);
	constructor(attr: ITagOutput, elem: IElem);
	constructor(...arg: any[]) {
		super("output", tagConsArg<ITagOutput>("elem", arg));
	}
}
