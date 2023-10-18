import { bsConstArg, bsConstArgTag } from "../../core/bootstrap.js";
import { IElem, tag } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { brand as Brand } from "../../interface/bootstrap/navbar/brand.js";

const convert = (attr: Brand) => {
	attr.class = mergeClass(attr.class, ["navbar-brand"]);
	return attr;
};

export class brand extends tag {
	constructor();
	constructor(attr: Brand);
	constructor(elem: IElem);
	constructor(attr: Brand, elem: IElem);
	constructor(...arg: any[]) {
		super(
			bsConstArgTag<Brand>("elem", "span", "a", (i) => (i.href ? true : false), arg),
			convert(bsConstArg<Brand>("elem", arg))
		);
	}
}
