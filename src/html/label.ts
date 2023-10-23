import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { label as Label } from "../interface/html/label.js";

export class label extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Label);
	constructor(attr: Label, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("label", tagConstructor<Label>("elem", arg));
	}
}
