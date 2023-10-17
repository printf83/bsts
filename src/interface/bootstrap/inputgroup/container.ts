import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";

export interface Container extends IAttr {
	weight?: "sm" | "lg";
	noWarp?: true;
}

const convert = (attr: Container) => {
	attr.class = mergeClass(attr.class, ["input-group", attr.weight ? `input-group-${attr.weight}` : undefined]);

	if (attr.noWarp) {
		attr = mergeObject({ flex: "nowrap" }, attr);
	}

	delete attr.weight;
	delete attr.noWarp;

	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: Container);
	constructor(elem: IElem);
	constructor(attr: Container, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
