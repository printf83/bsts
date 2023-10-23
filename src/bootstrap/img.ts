import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { img as HImg } from "../html/img.js";
import { img as Img } from "../interface/bootstrap/img.js";

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

export class img extends HImg {
	constructor();
	constructor(src: string);
	constructor(attr: Img);
	constructor(attr: Img, src: string);
	constructor(...arg: any[]) {
		super(convert(bsConstructor<Img>("src", arg)));
	}

	convert(attr: Img) {
		return super.convert(attr);
	}
}
