import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface IAttrTagLabel extends IAttr {
	for?: string;
	form?: string;
}

export class label extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagLabel);
	constructor(attr: IAttrTagLabel, elem: IElem);
	constructor(...arg: any[]) {
		super("label", tagConsArg<IAttrTagLabel>("elem", arg));
	}
}
