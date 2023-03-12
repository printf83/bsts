import { tagConsNoElemArg, IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagParam extends IAttr {
	name?: string;
	value?: string;
}

export class param extends tag {
	constructor();
	constructor(attr: IAttrTagParam);
	constructor(...arg: any[]) {
		super("param", tagConsNoElemArg<IAttrTagParam>(arg));
	}
}
