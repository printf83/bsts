import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { figcaption } from "../../html/figcaption.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "blockquote-footer");
	return attr;
};

export class caption extends figcaption {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Caption = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<caption, IAttr>(caption, AttrOrElem, Elem);
