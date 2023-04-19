import { IAttr, IElem } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { div } from "../html/div.js";
import { mergeObject } from "../core/mergeObject.js";

export interface IBsBtngroup extends IAttr {
	role?: "group" | "toolbar";
	weight?: "sm" | "lg";
	vertical?: boolean;
}
const convert = (attr: IBsBtngroup) => {
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

	return attr;
};

export class btngroup extends div {
	constructor(); //#1
	constructor(attr: IBsBtngroup); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsBtngroup, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsBtngroup>("elem", arg)));
	}
}
