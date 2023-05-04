import { IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h } from "../../html/h.js";
import { UUID } from "../../core/uuid.js";
import { Toggle, toggle } from "../collapse/toggle.js";

const convert = (attr: Toggle) => {
	attr.id ??= UUID();
	attr.class = mergeClass(attr.class, "accordion-header");
	attr.elem = new toggle(
		{
			class: "accordion-button",
			defColor: false,
			link: attr.link,
			target: attr.target,
			controlfor: attr.controlfor,
			expanded: attr.expanded,
		},
		attr.elem ? attr.elem : ""
	);

	delete attr.link;
	delete attr.target;
	delete attr.controlfor;
	delete attr.expanded;

	return attr;
};

export class header extends h {
	constructor();
	constructor(attr: Toggle);
	constructor(elem: IElem);
	constructor(attr: Toggle, elem: IElem);
	constructor(...arg: any[]) {
		super(2, convert(bsConstArg<Toggle>("elem", arg)));
	}
}

export const Header = (AttrOrElem?: Toggle | IElem, Elem?: IElem) =>
	genTagClass<header, Toggle>(header, AttrOrElem, Elem);
