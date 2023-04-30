import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Option extends IAttr {
	disabled?: boolean;
	selected?: boolean;
	value?: string;
}

export class option extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Option);
	constructor(attr: Option, elem: IElem);
	constructor(...arg: any[]) {
		super("option", tagConsArg<Option>("elem", arg));
	}
}

export const Option = (AttrOrElem?: Option | IElem, Elem?: IElem) =>
	genTagClass<option, Option>(option, AttrOrElem, Elem);
