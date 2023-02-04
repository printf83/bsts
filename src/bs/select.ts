import { isAttr } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { UUID } from "../core/fn/uuid.js";
import { IAttrTagSelect, IElemTagSelect, select as TSelect } from "../ht/select.js";

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
	constructor(elem: IElemTagSelect); //#3
	constructor(attr: IAttrBSSelect, elem: IElemTagSelect); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSSelect>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}
}
