import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { thead as HThead } from "../../html/thead.js";
import { thead as Thead } from "../../interface/bootstrap/table/thead.js";

const convert = (attr: Thead) => {
	attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);

	delete attr.color;

	return attr;
};

export class thead extends HThead {
	constructor();
	constructor(attr: Thead);
	constructor(elem: elem | elem[]);
	constructor(attr: Thead, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Thead>("elem", arg)));
	}
}
