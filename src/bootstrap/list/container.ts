import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { ul } from "../../html/ul.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { container as Container } from "../../interface/bootstrap/list/container.js";

export class container extends ul {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Container>("elem", arg));
	}

	convert(attr: Container) {
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
		return super.convert(attr);
	}
}
