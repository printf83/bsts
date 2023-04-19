import { bootstrapType } from "../../core/bootstrap.js";
import { IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { ITagUl, ul } from "../../html/ul.js";
import { mergeClass } from "../../core/mergeClass.js";

export interface IBsListContainer extends ITagUl {
	flush?: boolean;
	numbered?: boolean;
	horizontal?: boolean | bootstrapType.viewport;
}

const convert = (attr: IBsListContainer) => {
	attr.class = mergeClass(attr.class, [
		"list-group",
		attr.flush ? "list-group-flush" : undefined,
		attr.numbered ? "list-group-numbered" : undefined,
		attr.horizontal
			? attr.horizontal === true
				? "list-group-horizontal"
				: `list-group-horizontal-${attr.horizontal}`
			: undefined,
	]);

	delete attr.flush;
	delete attr.numbered;
	delete attr.horizontal;

	return attr;
};

export class container extends ul {
	constructor(); //#1
	constructor(attr: IBsListContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsListContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsListContainer>("elem", arg)));
	}
}

export const Container = (AttrOrElem?: IBsListContainer | IElem, Elem?: IElem) =>
	genTagClass<container, IBsListContainer>(container, AttrOrElem, Elem);
