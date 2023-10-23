import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { UUID } from "../../core/util/uuid.js";
import { container as BContainer } from "../collapse/container.js";
import { container as Container } from "../../interface/bootstrap/collapse/container.js";

const convert = (attr: Container) => {
	attr.id ??= UUID();
	attr.class = mergeClass(attr.class, "navbar-collapse");

	delete attr.horizontal;

	return attr;
};

export class collapse extends BContainer {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor<Container>("elem", arg)));
	}

	convert(attr: Container) {
		return super.convert(attr);
	}
}
