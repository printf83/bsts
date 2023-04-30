import { IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { container as BSNavHeaderContainer, Container } from "../nav/header/container.js";

const convert = (attr: Container) => {
	attr.type ??= "tab";

	attr.class = mergeClass(attr.class, `card-header-${attr.type}s`);

	return attr;
};

export class nav extends BSNavHeaderContainer {
	constructor(); //#1
	constructor(attr: Container); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Container, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}

export const Nav = (AttrOrElem?: Container | IElem, Elem?: IElem) => genTagClass<nav, Container>(nav, AttrOrElem, Elem);
