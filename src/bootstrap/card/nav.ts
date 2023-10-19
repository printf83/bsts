import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { container as BSNavHeaderContainer } from "../nav/header/container.js";
import { container as Container } from "../../interface/bootstrap/nav/header/container.js";

const convert = (attr: Container) => {
	attr.type ??= "tab";

	attr.class = mergeClass(attr.class, `card-header-${attr.type}s`);

	return attr;
};

export class nav extends BSNavHeaderContainer {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
