import { tagConsArg, IElem, tag } from "../core/tag.js";
import { label as Label } from "../interface/html/label.js";

export class label extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Label);
	constructor(attr: Label, elem: IElem);
	constructor(...arg: any[]) {
		super("label", tagConsArg<Label>("elem", arg));
	}
}
