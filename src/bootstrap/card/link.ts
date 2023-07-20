import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { a, A } from "../../html/a.js";

const convert = (attr: A) => {
	attr.class = mergeClass(attr.class, "card-link");
	return attr;
};

export class link extends a {
	constructor();
	constructor(attr: A);
	constructor(elem: IElem);
	constructor(attr: A, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<A>("elem", arg)));
	}
}
