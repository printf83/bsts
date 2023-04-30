import { IAttr, IElem, genTagClass } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { div } from "../../../../html/div.js";
import { mergeObject } from "../../../../core/mergeObject.js";

export interface Container extends IAttr {
	active?: boolean;
	interval?: number;
}

const convert = (attr: Container) => {
	attr = mergeObject(
		{
			class: ["carousel-item", attr.active ? "active" : undefined],
			data: { "bs-interval": attr.interval },
		},
		attr
	);

	delete attr.active;
	delete attr.interval;

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
