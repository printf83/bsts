import { IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagParam extends IAttr {
	name?: string;
	value?: string;
}

export class param extends tag {
	constructor();
	constructor(attr: IAttrTagParam);
	constructor(name: string, value: string);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("param");
		} else if (arg.length === 1) {
			super("param", arg[0]);
		} else if (arg.length === 2) {
			super("param", { name: arg[0], value: arg[1] } as IAttrTagParam);
		}
	}
}
