import { mergeObject } from "../core/fn/mergeObject.js";
import { IAttrTagImg, img as TImg } from "../tag/img.js";
import { IAttrBSIcon } from "./icon.js";

export interface IAttrBSImg extends IAttrTagImg {
	fluid?: true;
	thumbnail?: true;
}

const convert = (attr: IAttrBSImg): IAttrBSImg => {
	attr = mergeObject(attr, {
		class: [attr.fluid ? "img-fluid" : "", attr.thumbnail ? "img-thumbnail" : ""],
	});

	delete attr.fluid;
	delete attr.thumbnail;

	return attr;
};

export class img extends TImg {
	constructor(); //#1
	constructor(src: string); //#2
	constructor(attr: IAttrBSIcon); //#3
	constructor(attr: IAttrBSIcon, src: string); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super();
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				//#2
				super(arg[0]);
			} else {
				//#3
				super(convert(arg[0]));
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(arg[0]), arg[1]);
		}
	}
}
