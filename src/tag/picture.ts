import { IAttr, tag } from "../core/base/tag.js";
import { img } from "./img.js";
import { source } from "./source.js";

export type IElemTagPicture = source | img | (source | img)[];

export interface IAttrTagPicture extends IAttr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;

	elem?: IElemTagPicture;
}

export class picture extends tag {
	constructor();
	constructor(elem: IElemTagPicture);
	constructor(attr: IAttrTagPicture);
	constructor(attr: IAttrTagPicture, elem: IElemTagPicture);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("picture");
		} else if (arg.length === 1) {
			super("picture", arg[0]);
		} else if (arg.length === 2) {
			super("picture", arg[0], arg[1]);
		}
	}
}
