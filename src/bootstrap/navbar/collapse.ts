import { IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { UUID } from "../../core/uuid.js";
import { container as TCollapseContainer, IBsCollapseContainer } from "../collapse/container.js";

const convert = (attr: IBsCollapseContainer) => {
	attr.id ??= UUID();
	attr.class = mergeClass(attr.class, "navbar-collapse");

	delete attr.horizontal;

	return attr;
};

export class collapse extends TCollapseContainer {
	constructor(); //#1
	constructor(attr: IBsCollapseContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsCollapseContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsCollapseContainer>("elem", arg)));
	}
}

export const Collapse = (AttrOrElem?: IBsCollapseContainer | IElem, Elem?: IElem) =>
	genTagClass<collapse, IBsCollapseContainer>(collapse, AttrOrElem, Elem);
