import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

export interface ITagCol extends IAttr {
	span?: number;
}

export class col extends tag {
	constructor();
	constructor(attr: ITagCol);
	constructor(...arg: any[]) {
		super("col", tagConsNoElemArg(arg));
	}
}

export const Col = (Attr?: ITagCol) => genTagClass<col, ITagCol>(col, Attr);
