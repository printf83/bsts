import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { img as BImg } from "../img.js";
import { img as Img } from "../../interface/bootstrap/img.js";

const convert = (attr: Img) => {
	attr.class = mergeClass(attr.class, "figure-img");
	return attr;
};

export class img extends BImg {
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
