import { bsConstructor } from "../../../../core/bootstrap.js";
import { img as BImg } from "../../../img.js";
import { img as Img } from "../../../../interface/bootstrap/img";

const convert = (attr: Img) => {
	attr.display = "block";
	attr.width = 100;

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
