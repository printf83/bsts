import { IAttr, IElem } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { div } from "../html/div.js";
import { mergeObject } from "../core/mergeObject.js";

export interface Btngroup extends Omit<IAttr, "role"> {
	role?: "group" | "toolbar";
	weight?: "sm" | "lg";
	vertical?: boolean;
}
const convert = (attr: Btngroup): IAttr => {
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

	return attr as IAttr;
};

export class btngroup extends div {
	constructor();
	constructor(attr: Btngroup);
	constructor(elem: IElem);
	constructor(attr: Btngroup, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Btngroup>("elem", arg)));
	}
}
