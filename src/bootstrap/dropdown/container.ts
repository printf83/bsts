import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { btngroup } from "../btngroup.js";
import { container as Container } from "../../interface/bootstrap/dropdown/container.js";

export class container extends btngroup {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Container>("elem", arg));
	}

	convert(attr: Container) {
		attr.class = mergeClass(attr.class, [attr.drop ? `drop${attr.drop}` : undefined]);

		delete attr.drop;
		return super.convert(attr);
	}
}
