import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagOption extends IAttr {
	disabled?: boolean;
	label?: string;
	selected?: boolean;
	value?: string;
}

export class option extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(value: string, elem: string);
	constructor(attr: IAttrTagOption, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("option");
		} else if (arg.length === 1) {
			super("option", undefined, arg[0]);
		} else if (arg.length === 2) {
			if (typeof arg[0] === "string") {
				super("option", { value: arg[0] } as IAttrTagOption, arg[1]);
			} else {
				super("option", arg[0], arg[1]);
			}
		}
	}
}
