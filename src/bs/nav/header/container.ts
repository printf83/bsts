import { isAttr } from "../../../core/base/tag.js";
import { mergeClass } from "../../../core/fn/mergeClass.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
import { UUID } from "../../../core/fn/uuid.js";
import { IAttrTagUl, IElemTagUl, ul } from "../../../ht/ul.js";

export interface IAttrBSNavContainer extends IAttrTagUl {
	type?: "tab" | "pill";
	itemWidth?: "fill" | "justified";
	vertical?: true;
	role?: "tablist";
}

const convert = (attr: IAttrBSNavContainer): IAttrTagUl => {
	attr.class = mergeClass(attr.class, [
		"nav",
		attr.type ? `nav-${attr.type}s` : "",
		attr.itemWidth ? `nav-${attr.itemWidth}` : "",
		attr.vertical ? "flex-column" : "",
	]);

	if (attr.vertical) {
		attr = mergeObject(
			{
				aria: { orientation: "vertical" },
			},
			attr
		);
	}

	// attr.role = attr.role || "tablist";

	delete attr.type;
	delete attr.itemWidth;
	delete attr.vertical;

	return attr;
};

export class container extends ul {
	constructor(); //#1
	constructor(attr: IAttrBSNavContainer); //#2
	constructor(elem: IElemTagUl); //#3
	constructor(attr: IAttrBSNavContainer, elem: IElemTagUl); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSNavContainer>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({}), arg[0]);
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(arg[0]), arg[1]);
		}
	}
}
