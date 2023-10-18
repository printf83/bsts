import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { ul } from "../../html/ul.js";
import { mergeClass } from "../../core/mergeClass.js";
import { container as Container } from "../../interface/bootstrap/list/container.js";

const convert = (attr: Container) => {
	attr.class = mergeClass(attr.class, [
		"list-group",
		attr.flush ? "list-group-flush" : undefined,
		attr.numbered ? "list-group-numbered" : undefined,
		attr.horizontal
			? attr.horizontal === true
				? "list-group-horizontal"
				: `list-group-horizontal-${attr.horizontal}`
			: undefined,
	]);

	delete attr.flush;
	delete attr.numbered;
	delete attr.horizontal;

	return attr;
};

export class container extends ul {
	constructor();
	constructor(attr: Container);
	constructor(elem: IElem);
	constructor(attr: Container, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
