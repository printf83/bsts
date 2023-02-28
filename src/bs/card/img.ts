import { isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { IAttrBSImg, img } from "../../bs/img.js";

export interface IAttrBSCardImg extends IAttrBSImg {
	location?: "top";
}

const convert = (attr: IAttrBSCardImg): IAttrBSImg => {
	if (attr.location) {
		attr.class = mergeClass(attr.class, [`card-img-${attr.location}`]);
	}

	delete attr.location;

	return attr;
};

export class text extends img {
	constructor(); //#1
	constructor(src: string); //#2
	constructor(attr: IAttrBSCardImg); //#3
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSImg>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({ src: arg[0] }));
			}
		}
	}
}
