import { genTagClass } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { Img as IImg, img as TImg } from "../../bootstrap/img.js";
import { bsConstArg } from "../../core/bootstrap.js";

export interface Img extends IImg {
	location?: "top" | "bottom";
}

const convert = (attr: Img) => {
	if (attr.location) {
		attr.class = mergeClass(attr.class, [`card-img-${attr.location}`]);
	}

	delete attr.location;

	return attr;
};

export class img extends TImg {
	constructor(); //#1
	constructor(src: string); //#2
	constructor(attr: Img); //#3
	constructor(attr: Img, src: string); //#3
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Img>("src", arg)));
	}
}

export const Img = (AttrOrSrc?: Img | string, Src?: string) => genTagClass<img, Img>(img, AttrOrSrc, Src);
