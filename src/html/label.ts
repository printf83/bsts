import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Label extends IAttr {
	for?: string;
	form?: string;
}

export class label extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Label);
	constructor(attr: Label, elem: IElem);
	constructor(...arg: any[]) {
		super("label", tagConsArg<Label>("elem", arg));
	}
}
