import { attr } from "../../interface/core/attr.js";
import { ConstructorArgs } from "../../core/tag.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { nav } from "../../html/nav.js";

export class innercontainer extends div {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: ConstructorArgs<attr>) {
		super(bsConstructor("elem", arg));
	}
}

export class innercontainerNav extends nav {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: ConstructorArgs<attr>) {
		super(bsConstructor("elem", arg));
	}
}
