import { tagConsNoElemArg, IAttr, tag } from "../core/tag.js";

export interface ITagBase extends IAttr {
	href?: string;
	target?: "_blank" | "_parent" | "_self" | "_top";
}

export class base extends tag {
	constructor();
	constructor(attr: ITagBase);
	constructor(...arg: any[]) {
		super("base", tagConsNoElemArg<ITagBase>(arg));
	}
}
