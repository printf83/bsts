import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { thead as TThead } from "../../html/thead.js";

export interface Thead extends IAttr {
	color?: bootstrapType.color;
}

const convert = (attr: Thead) => {
	attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);

	delete attr.color;

	return attr;
};

export class thead extends TThead {
	constructor();
	constructor(attr: Thead);
	constructor(elem: IElem);
	constructor(attr: Thead, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Thead>("elem", arg)));
	}
}
