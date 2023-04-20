import { IElem, genTagClass } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { img as TImg, IBsImg } from "../../../img.js";

const convert = (attr: IBsImg) => {
	attr.display = "block";
	attr.width = 100;

	return attr;
};

export class img extends TImg {
	constructor(); //#1
	constructor(src: string); //#2
	constructor(attr: IBsImg); //#3
	constructor(attr: IBsImg, src: string); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsImg>("src", arg)));
	}
}

export const Img = (AttrOrSrc?: IBsImg | string, Src?: string) => genTagClass<img, IBsImg>(img, AttrOrSrc, Src);
