import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { footer as TFooter } from "../../html/footer.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "blockquote-footer");
	return attr;
};

export class footer extends TFooter {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: elem);
	constructor(attr: IAttr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
