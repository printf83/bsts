import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { img as TImg, Img as IImg } from "../img.js";

const convert = (attr: IImg) => {
	attr.class = mergeClass(attr.class, "figure-img");
	return attr;
};

export class img extends TImg {
	constructor();
	constructor(src: string);
	constructor(attr: IImg);
	constructor(attr: IImg, src: string);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IImg>("src", arg)));
	}
}
