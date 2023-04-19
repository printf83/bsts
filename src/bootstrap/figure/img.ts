import { IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { img as TImg, IBsImg } from "../img.js";

const convert = (attr: IBsImg) => {
	attr.class = mergeClass(attr.class, "figure-img");
	return attr;
};

export class img extends TImg {
	constructor(); //#1
	constructor(attr: IBsImg); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsImg, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsImg>("elem", arg)));
	}
}

export const Img = (AttrOrElem?: IBsImg | IElem, Elem?: IElem) => genTagClass<img, IBsImg>(img, AttrOrElem, Elem);
