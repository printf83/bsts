import { IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { UUID } from "../../core/uuid.js";
import { container as TCollapseContainer, Container } from "../collapse/container.js";

const convert = (attr: Container) => {
	attr.id ??= UUID();
	attr.class = mergeClass(attr.class, "navbar-collapse");

	delete attr.horizontal;

	return attr;
};

export class collapse extends TCollapseContainer {
	constructor(); //#1
	constructor(attr: Container); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Container, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}

export const Collapse = (AttrOrElem?: Container | IElem, Elem?: IElem) =>
	genTagClass<collapse, Container>(collapse, AttrOrElem, Elem);
