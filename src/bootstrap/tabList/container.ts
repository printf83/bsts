import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { div } from "../../html/div.js";
import { container as Container } from "../../interface/bootstrap/tabList/container.js";

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

export class container extends div {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
