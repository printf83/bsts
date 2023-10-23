import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { nav } from "../../html/nav.js";

const convert = (attr: attr) => {
	return attr;
};

export class innercontainer extends div {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor("elem", arg)));
	}

	convert(attr: attr) {
		return super.convert(attr);
	}
}

export class innercontainerNav extends nav {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor("elem", arg)));
	}

	convert(attr: attr) {
		return super.convert(attr);
	}
}
