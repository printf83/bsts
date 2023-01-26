import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagOutput extends IAttr {
	for?: string;
	from?: string;
	name?: string;
}

export class output extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagOutput);
	constructor(attr: IAttrTagOutput, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("output");
		} else if (arg.length === 1) {
			super("output", arg[0]);
		} else if (arg.length === 2) {
			super("output", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagOutput[]) => attrs.map((i) => new output(i));
}
