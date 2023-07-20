import { IElem } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { UUID } from "../core/uuid.js";
import { Select as ISelect, select as TSelect } from "../html/select.js";

export interface Select extends ISelect {
	weight?: "sm" | "lg";
	isvalid?: boolean;
}

const convert = (attr: Select) => {
	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: [
				"form-select",
				attr.weight ? `form-select-${attr.weight}` : undefined,
				attr.isvalid !== undefined ? (attr.isvalid ? "is-valid" : "is-invalid") : undefined,
			],
		},
		attr
	);

	delete attr.weight;
	delete attr.isvalid;

	return attr;
};

export class select extends TSelect {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Select);
	constructor(attr: Select, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Select>("elem", arg)));
	}
}
