import { mergeClass } from "../../core/util/mergeClass.js";
import { img as TImg } from "../../bootstrap/img.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { img as Img } from "../../interface/bootstrap/card/img.js";

const convert = (attr: Img) => {
	if (attr.location) {
		attr.class = mergeClass(attr.class, [`card-img-${attr.location}`]);
	}

	delete attr.location;

	return attr;
};

export class img extends TImg {
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
