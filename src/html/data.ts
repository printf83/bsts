import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagData extends IAttr {
	value?: string;
}

export class data extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagData);
	constructor(attr: ITagData, elem: IElem);
	constructor(...arg: any[]) {
		super("data", tagConsArg<ITagData>("elem", arg));
	}
}
