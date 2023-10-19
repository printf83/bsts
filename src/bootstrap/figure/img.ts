import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { img as BImg } from "../img.js";
import { img as IImg } from "../../interface/bootstrap/img.js";

const convert = (attr: IImg) => {
	attr.class = mergeClass(attr.class, "figure-img");
	return attr;
};

export class img extends BImg {
	constructor();
	constructor(src: string);
	constructor(attr: IImg);
	constructor(attr: IImg, src: string);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IImg>("src", arg)));
	}
}
