import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { footer as TFooter } from "../../html/footer.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, "blockquote-footer");
	return attr;
};

export class footer extends TFooter {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
