import { bsConstArg } from "../../../../core/bootstrap.js";
import { img as BImg } from "../../../img.js";
import { img as IImg } from "../../../../interface/bootstrap/img";

const convert = (attr: IImg) => {
	attr.display = "block";
	attr.width = 100;

	return attr;
};

export class img extends BImg {
	constructor();
	constructor(src: string);
	constructor(attr: IImg);
	constructor(attr: IImg, src: string);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IImg>("src", arg)));
	}
}
