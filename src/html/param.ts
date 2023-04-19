import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

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

export const Param = (Attr?: ITagParam) => genTagClass<param, ITagParam>(param, Attr);
