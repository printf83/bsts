import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { IAttrTagImg, img as TImg } from "../ht/img.js";

export interface IAttrBSImg extends IAttrTagImg {
	fluid?: true;
	thumbnail?: true;
}

const convert = (attr: IAttrBSImg) => {
	attr = mergeObject(
		{
			class: [attr.fluid ? "img-fluid" : "", attr.thumbnail ? "img-thumbnail" : ""],
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
	constructor(attr: IAttrBSImg); //#3
	constructor(attr: IAttrBSImg, src: string); //#3
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSImg>("src", convert, arg));
	}
}
