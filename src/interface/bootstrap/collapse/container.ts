import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/mergeObject.js";

export interface Container extends IAttr {
	horizontal?: true;
	autoInit?: boolean;
	parent?: string;
	show?: boolean;
}

const convert = (attr: Container) => {
	attr.id ??= UUID();
	attr.autoInit ??= true;

	attr = mergeObject(
		{
			class: [
				attr.autoInit ? "collapse" : undefined,
				attr.horizontal ? "collapse-horizontal" : undefined,
				attr.show ? "show" : undefined,
			],
			data: {
				"bs-parent": attr.parent,
			},
		},
		attr
	);

	delete attr.autoInit;
	delete attr.horizontal;
	delete attr.parent;
	delete attr.show;

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
