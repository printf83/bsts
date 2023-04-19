import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagFieldset extends IAttr {
	disabled?: boolean;
	form?: string;
	name?: string;
}

export class fieldset extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagFieldset);
	constructor(attr: ITagFieldset, elem: IElem);
	constructor(...arg: any[]) {
		super("fieldset", tagConsArg<ITagFieldset>("elem", arg));
	}
}
