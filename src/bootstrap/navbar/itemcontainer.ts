import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { ul } from "../../html/ul.js";
import { itemcontainer as Itemcontainer } from "../../interface/bootstrap/navbar/itemcontainer.js";

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
	constructor(elem: elem | elem[]);
	constructor(attr: Itemcontainer, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Itemcontainer>("elem", arg)));
	}
}
