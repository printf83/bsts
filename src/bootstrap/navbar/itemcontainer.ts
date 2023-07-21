import { IElem } from "../../core/tag.js";
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
	constructor();
	constructor(attr: Itemcontainer);
	constructor(elem: IElem);
	constructor(attr: Itemcontainer, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Itemcontainer>("elem", arg)));
	}
}
