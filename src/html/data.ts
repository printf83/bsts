import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface IAttrTagData extends IAttr {
	value?: string;
}

export class data extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagData);
	constructor(attr: IAttrTagData, elem: IElem);
	constructor(...arg: any[]) {
		super("data", tagConsArg<IAttrTagData>("elem", arg));
	}
}
