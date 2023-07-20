import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Fieldset extends IAttr {
	disabled?: boolean;
	form?: string;
	name?: string;
}

export class fieldset extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Fieldset);
	constructor(attr: Fieldset, elem: IElem);
	constructor(...arg: any[]) {
		super("fieldset", tagConsArg<Fieldset>("elem", arg));
	}
}
