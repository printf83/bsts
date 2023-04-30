import { genTagClass } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { img as TImg, Img as IImg } from "../../../img.js";

const convert = (attr: IImg) => {
	attr.display = "block";
	attr.width = 100;

	return attr;
};

export class img extends TImg {
	constructor(); //#1
	constructor(src: string); //#2
	constructor(attr: IImg); //#3
	constructor(attr: IImg, src: string); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IImg>("src", arg)));
	}
}

export const Img = (AttrOrSrc?: IImg | string, Src?: string) => genTagClass<img, IImg>(img, AttrOrSrc, Src);
