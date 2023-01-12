import { IAttrAsync, IAttrCharset, IAttrDefer, IAttrSrc, IAttrType } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagScript extends IAttrSrc, IAttrAsync, IAttrCharset, IAttrDefer, IAttrType {}

export class script extends tag {
	constructor();
	constructor(attr: IAttrTagScript);
	constructor(type: string, src: string);
	constructor(type: string, src: string, attr: IAttrTagScript);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("script");
		} else if (arg.length === 1) {
			super("script", arg[0], undefined);
		} else if (arg.length === 2) {
			super("script", { type: arg[0], src: arg[1] } as IAttrTagScript, undefined);
		} else if (arg.length === 3) {
			super("script", mergeObject(arg[2], { type: arg[0], src: arg[1] } as IAttrTagScript), undefined);
		}
	}
}
