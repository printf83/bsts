import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tr as TTr } from "../../html/tr.js";

export interface Tr extends IAttr {
	color?: bootstrapType.color;
	active?: boolean;
}

const convert = (attr: Tr) => {
	attr.class = mergeClass(attr.class, [
		attr.color ? `table-${attr.color}` : undefined,
		attr.active ? "table-active" : undefined,
	]);

	delete attr.color;
	delete attr.active;

	return attr;
};

export class tr extends TTr {
	constructor();
	constructor(attr: Tr);
	constructor(elem: IElem);
	constructor(attr: Tr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Tr>("elem", arg)));
	}
}
