import { IElem } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { img as TImg, IBsImg } from "../../../img.js";

const convert = (attr: IBsImg) => {
	attr.display = "block";
	attr.width = 100;

	return attr;
};

export class img extends TImg {
	constructor(); //#1
	constructor(attr: IBsImg); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsImg, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsImg>("elem", convert, arg));
	}
}
