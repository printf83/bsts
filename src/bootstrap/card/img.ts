import { genTagClass } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { IBsImg, img as TImg } from "../../bootstrap/img.js";
import { bsConstArg } from "../../core/bootstrap.js";

export interface IBsCardImg extends IBsImg {
	location?: "top" | "bottom";
}

const convert = (attr: IBsCardImg) => {
	if (attr.location) {
		attr.class = mergeClass(attr.class, [`card-img-${attr.location}`]);
	}

	delete attr.location;

	return attr;
};

export class img extends TImg {
	constructor(); //#1
	constructor(src: string); //#2
	constructor(attr: IBsCardImg); //#3
	constructor(attr: IBsCardImg, src: string); //#3
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsCardImg>("src", arg)));
	}
}

export const Img = (AttrOrSrc?: IBsCardImg | string, Src?: string) => genTagClass<img, IBsCardImg>(img, AttrOrSrc, Src);
