import { IAttr, tag } from "../core/base/tag.js";
import { caption } from "./caption.js";
import { colgroup } from "./colgroup.js";
import { tbody } from "./tbody.js";
import { tfoot } from "./tfoot.js";
import { thead } from "./thead.js";
import { tr } from "./tr.js";

export type IElemTagTable =
	| tr
	| thead
	| tbody
	| tfoot
	| caption
	| colgroup
	| (tr | thead | tbody | tfoot | caption | colgroup)[];

export interface IAttrTagTable extends IAttr {
	elem?: IElemTagTable;
}

export class table extends tag {
	constructor();
	constructor(elem: IElemTagTable);
	constructor(attr: IAttrTagTable);
	constructor(attr: IAttrTagTable, elem: IElemTagTable);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("table");
		} else if (arg.length === 1) {
			super("table", arg[0]);
		} else if (arg.length === 2) {
			super("table", arg[0], arg[1]);
		}
	}
}
