import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tr as HTr } from "../../html/tr.js";
import { tr as Tr } from "../../interface/bootstrap/table/tr.js";

const convert = (attr: Tr) => {
	attr.class = mergeClass(attr.class, [
		attr.color ? `table-${attr.color}` : undefined,
		attr.active ? "table-active" : undefined,
	]);

	delete attr.color;
	delete attr.active;

	return attr;
};

export class tr extends HTr {
	constructor();
	constructor(attr: Tr);
	constructor(elem: elem);
	constructor(attr: Tr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Tr>("elem", arg)));
	}
}
