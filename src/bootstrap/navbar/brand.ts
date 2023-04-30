import { bsConstArg, bsConstArgTag } from "../../core/bootstrap.js";
import { IAttr, IElem, genTagClass, tag } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";

export interface Brand extends IAttr {
	href?: string;
}

const convert = (attr: Brand) => {
	attr.class = mergeClass(attr.class, ["navbar-brand"]);
	return attr;
};

export class brand extends tag {
	constructor(); //#1
	constructor(attr: Brand); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Brand, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(
			bsConstArgTag<Brand>("elem", "span", "a", (i) => (i.href ? true : false), arg),
			convert(bsConstArg<Brand>("elem", arg))
		);
	}
}

export const Brand = (AttrOrElem?: Brand | IElem, Elem?: IElem) => genTagClass<brand, Brand>(brand, AttrOrElem, Elem);
