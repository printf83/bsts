import { tagConsNoElemArg, IAttr, tag } from "../core/tag.js";

export interface ITagParam extends IAttr {
	name?: string;
	value?: string;
}

export class param extends tag {
	constructor();
	constructor(attr: ITagParam);
	constructor(...arg: any[]) {
		super("param", tagConsNoElemArg<ITagParam>(arg));
	}
}
