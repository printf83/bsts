import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagOption extends IAttr {
	disabled?: boolean;
	selected?: boolean;
	value?: string;
}

export class option extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagOption);
	constructor(attr: ITagOption, elem: IElem);
	constructor(...arg: any[]) {
		super("option", tagConsArg<ITagOption>("elem", arg));
	}
}
