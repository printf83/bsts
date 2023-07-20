import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";

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
	constructor();
	constructor(src: string);
	constructor(attr: Img);
	constructor(attr: Img, src: string);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Img>("src", arg)));
	}
}
