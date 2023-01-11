import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

type IHLevel = 1 | 2 | 3 | 4 | 5 | 6;

export class h extends tag {
	constructor();
	constructor(level: IHLevel);
	constructor(level: IHLevel, elem: IElem);
	constructor(level: IHLevel, attr: IAttr, elem: IElem);
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
