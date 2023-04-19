import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { container as BSNavHeaderContainer, IBsNavContainer } from "../nav/header/container.js";

const convert = (attr: IBsNavContainer) => {
	attr.type ??= "tab";

	attr.class = mergeClass(attr.class, `card-header-${attr.type}s`);

	return attr;
};

export class nav extends BSNavHeaderContainer {
	constructor(); //#1
	constructor(attr: IBsNavContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsNavContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsNavContainer>("elem", convert, arg));
	}
}
