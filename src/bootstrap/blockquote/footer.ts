import { IAttr, IElem, genTagClass } from "../../core/tag.js";
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
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Footer = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<footer, IAttr>(footer, AttrOrElem, Elem);
