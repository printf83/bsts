import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { dialog as Dialog } from "../interface/html/dialog.js";

export class dialog extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Dialog);
	constructor(attr: Dialog, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("dialog", tagConsArg<Dialog>("elem", arg));
	}
}
