import { IElem } from "../core/base/tag.js";
import { conElem } from "../core/fn/arg.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { UUID } from "../core/fn/uuid.js";
import { IAttrTagSelect, select as TSelect } from "../ht/select.js";

export interface IAttrBSSelect extends IAttrTagSelect {
	weight?: "sm" | "lg";
}

const convert = (attr: IAttrBSSelect) => {
	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: ["form-select", attr.weight ? `form-select-${attr.weight}` : ""],
		},
		attr
	);

	delete attr.weight;

	return attr;
};

export class select extends TSelect {
	constructor(); //#1
	constructor(attr: IAttrBSSelect); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSSelect, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conElem<IAttrBSSelect>(convert, arg));
	}
}
