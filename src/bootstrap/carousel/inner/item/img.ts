import { IElem } from "../../../../core/base/tag.js";
import { bsConstArg } from "../../../../core/base/bootstrap.js";
import { img as TImg, IAttrBSImg } from "../../../img.js";

const convert = (attr: IAttrBSImg) => {
	attr.display = "block";
	attr.width = 100;

	return attr;
};

export class img extends TImg {
	constructor(); //#1
	constructor(attr: IAttrBSImg); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSImg, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSImg>("elem", convert, arg));
	}
}
