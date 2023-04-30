import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { div } from "../../html/div.js";

export interface Responsive extends IAttr {
	responsive?: bootstrapType.viewport;
}

const convert = (attr: Responsive) => {
	attr.class = mergeClass(attr.class, [attr.responsive ? `table-responsive-${attr.responsive}` : "table-responsive"]);

	delete attr.responsive;

	return attr;
};

export class responsive extends div {
	constructor(); //#1
	constructor(attr: Responsive); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Responsive, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Responsive>("elem", arg)));
	}
}

export const Responsive = (AttrOrElem?: Responsive | IElem, Elem?: IElem) =>
	genTagClass<responsive, Responsive>(responsive, AttrOrElem, Elem);
