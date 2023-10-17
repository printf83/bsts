import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { UUID } from "../../core/uuid.js";
import { container as TCollapseContainer, Container } from "../collapse/container.js";

const convert = (attr: Container) => {
	attr.id ??= UUID();
	attr.class = mergeClass(attr.class, "navbar-collapse");

	delete attr.horizontal;

	return attr;
};

export class collapse extends TCollapseContainer {
	constructor();
	constructor(attr: Container);
	constructor(elem: IElem);
	constructor(attr: Container, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
