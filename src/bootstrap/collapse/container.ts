import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";

export interface Container extends IAttr {
	horizontal?: true;
}

const convert = (attr: Container) => {
	attr.id ??= UUID();
	attr.class = mergeClass(attr.class, ["collapse", attr.horizontal ? "collapse-horizontal" : undefined]);

	delete attr.horizontal;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: Container); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Container, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}

export const Container = (AttrOrElem?: Container | IElem, Elem?: IElem) =>
	genTagClass<container, Container>(container, AttrOrElem, Elem);
