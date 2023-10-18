import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
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
	constructor(elem: IElem);
	constructor(attr: Thead, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Thead>("elem", arg)));
	}
}
