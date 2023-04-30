import { genTagClass, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { a, A } from "../../html/a.js";

const convert = (attr: A) => {
	attr.class = mergeClass(attr.class, "card-link");
	return attr;
};

export class link extends a {
	constructor(); //#1
	constructor(attr: A); //#2
	constructor(elem: IElem); //#3
	constructor(attr: A, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<A>("elem", arg)));
	}
}

export const Link = (AttrOrElem?: A | IElem, Elem?: IElem) => genTagClass<link, A>(link, AttrOrElem, Elem);
