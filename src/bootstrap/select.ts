import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { UUID } from "../core/util/uuid.js";
import { select as TSelect } from "../html/select.js";
import { select as Select } from "../interface/bootstrap/select.js";
import { elem } from "../interface/core/elem.js";

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
	constructor(elem: elem | elem[]);
	constructor(attr: Select);
	constructor(attr: Select, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor<Select>("elem", arg)));
	}
}
