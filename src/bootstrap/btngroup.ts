import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";
import { bsConstArg } from "../core/bootstrap.js";
import { div } from "../html/div.js";
import { mergeObject } from "../core/mergeObject.js";
import { btngroup as Btngroup } from "../interface/bootstrap/btngroup.js";

const convert = (attr: Btngroup): attr => {
	attr.role ??= "group";

	attr = mergeObject(
		{
			class: [
				attr.vertical ? `btn-${attr.role}-vertical` : `btn-${attr.role}`,
				attr.weight ? `btn-${attr.role}-${attr.weight}` : undefined,
			],
			role: attr.role,
		},
		attr
	);

	delete attr.weight;
	delete attr.vertical;

	return attr as attr;
};

export class btngroup extends div {
	constructor();
	constructor(attr: Btngroup);
	constructor(elem: elem | elem[]);
	constructor(attr: Btngroup, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Btngroup>("elem", arg)));
	}
}
