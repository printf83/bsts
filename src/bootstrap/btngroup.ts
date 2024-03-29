import { elem } from "../interface/core/elem.js";
import { bsConstructor } from "../core/bootstrap.js";
import { div } from "../html/div.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { btngroup as Btngroup } from "../interface/bootstrap/btngroup.js";

/**
 * btngroup component extends div to render a button group.
 * Has constructor with overloads to accept attributes, elements, or both.
 * Has convert method to handle converting btngroup attributes into rendered attributes.
 * Handles applying styles and role for vertical orientation and weight.
 */
export class btngroup extends div {
	constructor();
	constructor(attr: Btngroup);
	constructor(elem: elem | elem[]);
	constructor(attr: Btngroup, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Btngroup>("elem", arg));
	}

	convert(attr: Btngroup) {
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
		return super.convert(attr);
	}
}
