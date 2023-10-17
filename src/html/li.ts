import { tagConsArg, IElem, tag } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { li as Li } from "../interface/html/li.js";

const convert = (attr: Li) => {
	attr.class = mergeClass(attr.class, [attr.inline ? "list-inline-item" : undefined]);
	delete attr.inline;
	return attr;
};

export class li extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Li);
	constructor(attr: Li, elem: IElem);
	constructor(...arg: any[]) {
		super("li", convert(tagConsArg<Li>("elem", arg)));
	}
}
