import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { a } from "../../html/a.js";
import { a as A } from "../../interface/html/a.js";

const convert = (attr: A) => {
	attr.class = mergeClass(attr.class, "card-link");
	return attr;
};

export class link extends a {
	constructor();
	constructor(attr: A);
	constructor(elem: elem | elem[]);
	constructor(attr: A, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<A>("elem", arg)));
	}
}
