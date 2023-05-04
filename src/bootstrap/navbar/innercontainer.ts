import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { nav } from "../../html/nav.js";

const convert = (attr: IAttr) => {
	return attr;
};

export class innercontainer extends div {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Innercontainer = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<innercontainer, IAttr>(innercontainer, AttrOrElem, Elem);

export class innercontainerNav extends nav {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const InnercontainerNav = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<innercontainerNav, IAttr>(innercontainerNav, AttrOrElem, Elem);
