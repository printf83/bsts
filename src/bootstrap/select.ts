import { IElem } from "../core/base/tag.js";
import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { UUID } from "../core/fn/uuid.js";
import { IAttrTagSelect, select as TSelect } from "../html/select.js";

export interface IAttrBSSelect extends IAttrTagSelect {
	weight?: "sm" | "lg";
}

const convert = (attr: IAttrBSSelect) => {
	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: ["form-select", attr.weight ? `form-select-${attr.weight}` : undefined],
		},
		attr
	);

	delete attr.weight;

	return attr;
};

export class select extends TSelect {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrBSSelect);
	constructor(attr: IAttrBSSelect, elem: IElem);
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSSelect>("elem", convert, arg));
	}
}
