import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

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

export const Base = (Attr?: ITagBase) => genTagClass<base, ITagBase>(base, Attr);
