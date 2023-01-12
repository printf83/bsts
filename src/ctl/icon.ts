import { IAttr, IElem } from "../core/base/index.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { i } from "../tag/i.js";

export interface IAttrIcon extends IAttr {
	icon: string;
	type?: string;
}

export class icon extends i {
	constructor();
	constructor(attr: IAttrIcon);
	constructor(icon: string);
	constructor(type: string, icon: string);
	constructor(attr: IAttrIcon, type: string, icon: string);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super();
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				let a: IAttr = {
					class: ["fas", arg[0]],
				};
				super(a, []);
			} else {
			}
		} else if (arg.length === 2) {
			let a: IAttr = {
				class: [arg[0], arg[1]],
			};
			super(a, []);
		} else if (arg.length === 3) {
		}
	}
}
