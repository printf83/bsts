import { IAttr, tag } from "../core/base/tag.js";
import { figcaption } from "./figcaption.js";
import { img } from "./img.js";

export type IElemTagFigure = img | figcaption | (img | figcaption)[];

export interface IAttrTagFigure extends IAttr {
	elem?: IElemTagFigure;
}

export class figure extends tag {
	constructor();
	constructor(elem: IElemTagFigure);
	constructor(attr: IAttrTagFigure);
	constructor(attr: IAttrTagFigure, elem: IElemTagFigure);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("figure");
		} else if (arg.length === 1) {
			super("figure", arg[0]);
		} else if (arg.length === 2) {
			super("figure", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagFigure[]) => attrs.map((i) => new figure(i));
}
