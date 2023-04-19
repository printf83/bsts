import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagLabel extends IAttr {
	for?: string;
	form?: string;
}

export class label extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagLabel);
	constructor(attr: ITagLabel, elem: IElem);
	constructor(...arg: any[]) {
		super("label", tagConsArg<ITagLabel>("elem", arg));
	}
}
