import { IAttrCharset, IAttrContent, IAttrHttpEquiv, IAttrName } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagMeta extends IAttrCharset, IAttrContent, IAttrHttpEquiv, IAttrName {}

export class meta extends tag {
	constructor();
	constructor(attr: IAttrTagMeta);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("meta");
		} else if (arg.length === 1) {
			super("meta", arg[0], undefined);
		}
	}
}
