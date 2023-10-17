import { tagConsArg, IElem, tag } from "../core/tag.js";
import { fieldset as Fieldset } from "../interface/html/fieldset.js";

export class fieldset extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Fieldset);
	constructor(attr: Fieldset, elem: IElem);
	constructor(...arg: any[]) {
		super("fieldset", tagConsArg<Fieldset>("elem", arg));
	}
}
