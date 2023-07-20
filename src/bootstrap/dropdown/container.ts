import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { Btngroup, btngroup } from "../btngroup.js";

export type Drop = "down" | "down-center" | "up" | "up-center" | "start" | "end";
export interface Container extends Btngroup {
	drop?: Drop;
}

const convert = (attr: Container) => {
	attr.class = mergeClass(attr.class, [attr.drop ? `drop${attr.drop}` : undefined]);

	delete attr.drop;

	return attr;
};

export class container extends btngroup {
	constructor();
	constructor(attr: Container);
	constructor(elem: IElem);
	constructor(attr: Container, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
