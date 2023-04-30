import { IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { Ul, ul } from "../../html/ul.js";

export interface Itemcontainer extends Ul {
	scroll?: boolean;
	scrollHeight?: string;
}

const convert = (attr: Itemcontainer) => {
	attr = mergeObject(
		{
			class: ["navbar-nav", attr.scroll ? "navbar-nav-scroll" : undefined],
			style: { "--bs-scroll-height": attr.scrollHeight },
		},
		attr
	);

	return attr;
};

export class itemcontainer extends ul {
	constructor(); //#1
	constructor(attr: Itemcontainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Itemcontainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Itemcontainer>("elem", arg)));
	}
}

export const Itemcontainer = (AttrOrElem?: Itemcontainer | IElem, Elem?: IElem) =>
	genTagClass<itemcontainer, Itemcontainer>(itemcontainer, AttrOrElem, Elem);
