import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { genTagClass } from "../core/tag.js";
import { Img as IImg, img as TImg } from "../html/img.js";

export interface Img extends IImg {
	fluid?: true;
	thumbnail?: true;
}

const convert = (attr: Img) => {
	attr = mergeObject(
		{
			class: [attr.fluid ? "img-fluid" : undefined, attr.thumbnail ? "img-thumbnail" : undefined],
		},
		attr
	);

	delete attr.fluid;
	delete attr.thumbnail;

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
