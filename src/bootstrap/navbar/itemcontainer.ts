import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { ul } from "../../html/ul.js";
import { itemcontainer as Itemcontainer } from "../../interface/bootstrap/navbar/itemcontainer.js";

export class itemcontainer extends ul {
	constructor();
	constructor(attr: Itemcontainer);
	constructor(elem: elem | elem[]);
	constructor(attr: Itemcontainer, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Itemcontainer>("elem", arg));
	}

	convert(attr: Itemcontainer) {
		attr = mergeObject(
			{
				class: ["navbar-nav", attr.scroll ? "navbar-nav-scroll" : undefined],
				style: { "--bs-scroll-height": attr.scrollHeight },
			},
			attr
		);
		return super.convert(attr);
	}
}
