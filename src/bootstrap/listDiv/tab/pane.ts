import { IAttr, IElem, genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";

export interface Pane extends IAttr {
	animation?: boolean;
	active?: boolean;
	role?: "tabpanel";
}

const convert = (attr: Pane) => {
	attr.animation ??= true;
	attr.role ??= "tabpanel";

	attr.class = mergeClass(attr.class, [
		"tab-pane",
		attr.animation ? "fade" : undefined,
		attr.active ? "show" : undefined,
		attr.active ? "active" : undefined,
	]);

	delete attr.animation;
	delete attr.active;

	return attr;
};

export class pane extends div {
	constructor(); //#1
	constructor(attr: Pane); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Pane, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Pane>("elem", arg)));
	}
}

export const Pane = (AttrOrElem?: Pane | IElem, Elem?: IElem) => genTagClass<pane, Pane>(pane, AttrOrElem, Elem);
