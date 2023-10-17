import { bsConstArg } from "../core/bootstrap.js";
import { IAttr, IElem } from "../core/tag.js";
import { mergeObject } from "../core/mergeObject.js";
import { div } from "../html/div.js";

const convert = (attr: IAttr) => {
	attr = mergeObject(
		{
			col: true,
		},
		attr
	);

	return attr;
};

export class col extends div {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
