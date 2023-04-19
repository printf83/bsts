import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { ITagImg, img as TImg } from "../html/img.js";

export interface IBsImg extends ITagImg {
	fluid?: true;
	thumbnail?: true;
}

const convert = (attr: IBsImg) => {
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
	constructor(attr: IBsImg); //#3
	constructor(attr: IBsImg, src: string); //#3
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsImg>("src", arg)));
	}
}
