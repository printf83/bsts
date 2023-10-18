import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tbody as HTbody } from "../../html/tbody.js";
import { tbody as Tbody } from "../../interface/bootstrap/table/tbody.js";

const convert = (attr: Tbody) => {
	attr.class = mergeClass(attr.class, [attr.divider ? "table-group-divider" : undefined]);

	delete attr.divider;

	return attr;
};

export class tbody extends HTbody {
	constructor();
	constructor(attr: Tbody);
	constructor(elem: IElem);
	constructor(attr: Tbody, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Tbody>("elem", arg)));
	}
}
