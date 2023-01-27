import { IAttr, tag } from "../core/base/tag.js";
import { base } from "./base.js";
import { link } from "./link.js";
import { meta } from "./meta.js";
import { noscript } from "./noscript.js";
import { script } from "./script.js";
import { style } from "./style.js";
import { title } from "./title.js";

export type IElemTagHead =
	| title
	| style
	| base
	| link
	| meta
	| script
	| noscript
	| (title | style | base | link | meta | script | noscript)[];

export interface IAttrTagHead extends IAttr {
	elem?: IElemTagHead;
}

export class head extends tag {
	constructor();
	constructor(elem: IElemTagHead);
	constructor(attr: IAttrTagHead);
	constructor(attr: IAttrTagHead, elem: IElemTagHead);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("head");
		} else if (arg.length === 1) {
			super("head", arg[0]);
		} else if (arg.length === 2) {
			super("head", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagHead[]) => attrs.map((i) => new head(i));
}
