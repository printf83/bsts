import { IAttr } from "../core/base/tag.js";
import { conProp } from "../core/fn/arg.js";
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
		super(conProp<IAttrBSImg>("src", convert, arg));
		// if (arg.length === 0) {
		// 	//#1
		// 	super();
		// } else if (arg.length === 1) {
		// 	if (typeof arg[0] === "string") {
		// 		//#2
		// 		super(convert({ src: arg[0] }));
		// 	} else {
		// 		//#3
		// 		super(convert(arg[0]));
		// 	}
		// }
	}
}
