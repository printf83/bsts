import { tagConsArg, IElem, tag } from "../core/tag.js";
import { dialog as Dialog } from "../interface/html/dialog.js";

export class dialog extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Dialog);
	constructor(attr: Dialog, elem: IElem);
	constructor(...arg: any[]) {
		super("dialog", tagConsArg<Dialog>("elem", arg));
	}
}
