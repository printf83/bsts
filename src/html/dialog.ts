import { tagConstructor, tag, ConstructorArgs } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { dialog as Dialog } from "../interface/html/dialog.js";

export class dialog extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Dialog);
	constructor(attr: Dialog, elem: elem | elem[]);
	constructor(...arg: ConstructorArgs<Dialog>) {
		super("dialog", tagConstructor<Dialog>("elem", arg));
	}
}
