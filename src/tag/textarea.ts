import { IAttr, tag } from "../core/attach/_index.js";

export interface IAttrTagTextarea extends IAttr {
	autofocus?: boolean;
	cols?: number;
	dirname?: string;
	disabled?: boolean;
	form?: string;
	maxlength?: number;
	name?: string;
	placeholderText?: string;
	readonly?: boolean;
	required?: boolean;
	rows?: number;
	wrap?: "hard" | "soft";
}

export class textarea extends tag {
	constructor();
	constructor(value: string);
	constructor(attr: IAttrTagTextarea, value: string);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("textarea");
		} else if (arg.length === 1) {
			super("textarea", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("textarea", arg[0], arg[1]);
		}
	}
}
