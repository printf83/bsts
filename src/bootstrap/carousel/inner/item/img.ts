import { bsConstructor } from "../../../../core/bootstrap.js";
import { img as BImg } from "../../../img.js";
import { img as Img } from "../../../../interface/bootstrap/img";

export class img extends BImg {
	constructor();
	constructor(src: string);
	constructor(attr: Img);
	constructor(attr: Img, src: string);
	constructor(...arg: any[]) {
		super(bsConstructor<Img>("src", arg));
	}

	convert(attr: Img) {
		attr.display = "block";
		attr.width = 100;
		return super.convert(attr);
	}
}
