import { tagConsArg, IElem, tag } from "../core/tag.js";
import { button as Button } from "../interface/html/button.js";

export class button extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Button);
	constructor(attr: Button, elem: IElem);
	constructor(...arg: any[]) {
		super("button", tagConsArg<Button>("elem", arg));
	}
}
