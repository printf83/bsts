import { bsConstArg } from "../../../../core/bootstrap.js";
import { img as TImg, Img as IImg } from "../../../img.js";

const convert = (attr: IImg) => {
	attr.display = "block";
	attr.width = 100;

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
