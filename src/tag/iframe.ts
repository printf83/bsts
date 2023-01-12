import { IAttrName, IAttrSandbox, IAttrSrc, IAttrSrcdoc } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagIframe extends IAttrName, IAttrSrc, IAttrSandbox, IAttrSrcdoc {}

export class iframe extends tag {
	constructor();
	constructor(src: string);
	constructor(attr: IAttrTagIframe);
	constructor(src: string, attr: IAttrTagIframe);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("iframe");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("iframe", { src: arg[0] } as IAttrTagIframe, undefined);
			} else {
				super("iframe", arg[0], undefined);
			}
		} else if (arg.length === 2) {
			super("iframe", mergeObject(arg[1], { src: arg[0] } as IAttrTagIframe), undefined);
		}
	}
}
