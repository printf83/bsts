import { IAttr, IElem, tag } from "../core/base/tag.js";
import { caption } from "./caption.js";
import { colgroup } from "./colgroup.js";
import { tbody } from "./tbody.js";
import { tfoot } from "./tfoot.js";
import { thead } from "./thead.js";
import { tr } from "./tr.js";

export interface IAttrTagTable extends IAttr {
	elem?: (tr | thead | tbody | tfoot | caption | colgroup)[];
}

export class table extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTable);
	constructor(attr: IAttrTagTable, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("table");
		} else if (arg.length === 1) {
			super("table", arg[0]);
		} else if (arg.length === 2) {
			super("table", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagTable[]) => attrs.map((i) => new table(i));
}
