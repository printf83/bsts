import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { btngroup } from "../btngroup.js";
import { container as Container } from "../../interface/bootstrap/dropdown/container.js";

const convert = (attr: Container) => {
	attr.class = mergeClass(attr.class, [attr.drop ? `drop${attr.drop}` : undefined]);

	delete attr.drop;

	return attr;
};

export class container extends btngroup {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem);
	constructor(attr: Container, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
