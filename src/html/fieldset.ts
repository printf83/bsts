import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { fieldset as Fieldset } from "../interface/html/fieldset.js";

export class fieldset extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Fieldset);
	constructor(attr: Fieldset, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("fieldset", tagConsArg<Fieldset>("elem", arg));
	}
}
