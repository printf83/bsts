import { isAttr } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { IBsImg, img as TImg } from "../../bootstrap/img.js";

export interface IBsCardImg extends IBsImg {
	location?: "top" | "bottom";
}

const convert = (attr: IBsCardImg) => {
	if (attr.location) {
		attr.class = mergeClass(attr.class, [`card-img-${attr.location}`]);
	}

	delete attr.location;

	return attr;
};

export class img extends TImg {
	constructor(); //#1
	constructor(src: string); //#2
	constructor(attr: IBsCardImg); //#3
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IBsImg>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({ src: arg[0] }));
			}
		}
	}
}
