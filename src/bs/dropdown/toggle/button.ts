import { IElem, isAttr } from "../../../core/base/tag.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
import { button as TButton, IAttrBSButton } from "../../button.js";

const convert = (attr: IAttrBSButton): IAttrBSButton => {
	attr = mergeObject(
		{
			class: "dropdown-toggle",
			data: {
				"bs-toggle": "dropdown",
			},
			aria: { expanded: "false" },
		},
		attr
	);

	return attr;
};

export class button extends TButton {
	constructor(); //#1
	constructor(attr: IAttrBSButton); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSButton, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}), "Dropdown");
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSButton>(arg[0])) {
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
