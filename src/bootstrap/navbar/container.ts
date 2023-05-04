import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { nav } from "../../html/nav.js";
import { header } from "../../html/header.js";
import { mergeClass } from "../../core/mergeClass.js";

export interface Container extends IAttr {
	expand?: bootstrapType.viewport;
}

const convert = (attr: Container) => {
	attr.class = mergeClass(attr.class, ["navbar", attr.expand ? `navbar-expand-${attr.expand}` : undefined]);
	delete attr.expand;
	return attr;
};

export class container extends nav {
	constructor();
	constructor(attr: Container);
	constructor(elem: IElem);
	constructor(attr: Container, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}

export const Container = (AttrOrElem?: Container | IElem, Elem?: IElem) =>
	genTagClass<container, Container>(container, AttrOrElem, Elem);

export class containerHeader extends header {
	constructor();
	constructor(attr: Container);
	constructor(elem: IElem);
	constructor(attr: Container, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}

export const ContainerHeader = (AttrOrElem?: Container | IElem, Elem?: IElem) =>
	genTagClass<containerHeader, Container>(containerHeader, AttrOrElem, Elem);
