import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { mergeClass } from "../../core/mergeClass.js";
import { containerDiv as ContainerDiv } from "../../interface/bootstrap/list/containerDiv.js";

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
	constructor(elem: elem);
	constructor(attr: ContainerDiv, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<ContainerDiv>("elem", arg)));
	}
}
