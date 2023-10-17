import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { mergeClass } from "../../core/mergeClass.js";

export interface ContainerDiv extends IAttr {
	flush?: boolean;
	numbered?: boolean;
	horizontal?: boolean | bootstrapType.viewport;
}

const convert = (attr: ContainerDiv) => {
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

export class containerDiv extends div {
	constructor();
	constructor(attr: ContainerDiv);
	constructor(elem: IElem);
	constructor(attr: ContainerDiv, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<ContainerDiv>("elem", arg)));
	}
}
