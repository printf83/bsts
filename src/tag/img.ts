import { IAttrAlt, IAttrIsmap, IAttrSizes, IAttrSrc, IAttrSrcset, IAttrUsemap } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagImg extends IAttrAlt, IAttrSrc, IAttrIsmap, IAttrSizes, IAttrSrcset, IAttrUsemap {}

export class img extends tag {
	constructor();
	constructor(src: string);
	constructor(attr: IAttrTagImg);
	constructor(src: string, attr: IAttrTagImg);
	constructor(...arg: any[]) {
		if (arg.length === 2) {
			super("img", mergeObject(arg[1], { src: arg[0] } as IAttrTagImg), undefined);
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("img", { src: arg[0] } as IAttrTagImg, undefined);
			} else {
				super("img", arg[0], undefined);
			}
		} else if (arg.length === 0) {
			super("img");
		}
	}
}
