import { IAttr, IElem, tag } from "../core/base/tag.js";

type HLevel = 1 | 2 | 3 | 4 | 5 | 6;

export class h extends tag {
	constructor();
	constructor(level: HLevel);
	constructor(level: HLevel, elem: IElem);
	constructor(level: HLevel, attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("h1");
		} else if (arg.length === 1) {
			super(`h${arg[0]}`);
		} else if (arg.length === 2) {
			super(`h${arg[0]}`, undefined, arg[1]);
		} else if (arg.length === 3) {
			super(`h${arg[0]}`, arg[1], arg[2]);
		}
	}
}
