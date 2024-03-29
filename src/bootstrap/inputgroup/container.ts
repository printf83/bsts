import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { div } from "../../html/div.js";
import { container as Container } from "../../interface/bootstrap/inputgroup/container.js";

export class container extends div {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Container>("elem", arg));
	}

	convert(attr: Container) {
		attr.class = mergeClass(attr.class, ["input-group", attr.weight ? `input-group-${attr.weight}` : undefined]);

		if (attr.noWarp) {
			attr = mergeObject({ flex: "nowrap" }, attr);
		}

		delete attr.weight;
		delete attr.noWarp;
		return super.convert(attr);
	}
}
