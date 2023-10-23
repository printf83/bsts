import { bsConstructor, bsConstructorMultiTag } from "../../core/bootstrap.js";
import { tag } from "../../core/tag.js";
import { elem } from "../../interface/core/elem.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { brand as Brand } from "../../interface/bootstrap/navbar/brand.js";

export class brand extends tag {
	constructor();
	constructor(attr: Brand);
	constructor(elem: elem | elem[]);
	constructor(attr: Brand, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(
			bsConstructorMultiTag<Brand>("elem", "span", "a", (i) => (i.href ? true : false), arg),
			bsConstructor<Brand>("elem", arg)
		);
	}

	convert(attr: Brand) {
		attr.class = mergeClass(attr.class, ["navbar-brand"]);

		return super.convert(attr);
	}
}
