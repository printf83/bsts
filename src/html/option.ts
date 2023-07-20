import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Option extends IAttr {
	disabled?: boolean;
	selected?: boolean;
	value?: string;
}

export class option extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Option);
	constructor(attr: Option, elem: IElem);
	constructor(...arg: any[]) {
		super("option", tagConsArg<Option>("elem", arg));
	}
}
