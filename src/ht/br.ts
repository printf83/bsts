import { tagConsNoElemArg, IAttr, tag } from "../core/base/tag.js";

export class br extends tag {
	constructor();
	constructor(attr: IAttr);
	constructor(...arg: any[]) {
		super("br", tagConsNoElemArg(arg));
	}
}
