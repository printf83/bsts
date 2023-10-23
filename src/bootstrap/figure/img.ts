import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { img as BImg } from "../img.js";
import { img as Img } from "../../interface/bootstrap/img.js";

export class img extends BImg {
	constructor();
	constructor(src: string);
	constructor(attr: Img);
	constructor(attr: Img, src: string);
	constructor(...arg: any[]) {
		super(bsConstructor<Img>("src", arg));
	}

	convert(attr: Img) {
		attr.class = mergeClass(attr.class, "figure-img");

		return super.convert(attr);
	}
}
