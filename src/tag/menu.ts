import { IAttr, tag } from "../core/base/tag.js";
import { li } from "./li.js";

export type IElemTagMenu = li | li[];

export interface IAttrTagMenu extends IAttr {
	elem?: IElemTagMenu;
}

export class menu extends tag {
	constructor();
	constructor(elem: IElemTagMenu);
	constructor(attr: IAttrTagMenu);
	constructor(attr: IAttrTagMenu, elem: IElemTagMenu);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("menu");
		} else if (arg.length === 1) {
			super("menu", arg[0]);
		} else if (arg.length === 2) {
			super("menu", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagMenu[]) => attrs.map((i) => new menu(i));
}
