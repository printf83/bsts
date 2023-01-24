import { bootstrapBase, bootstrapType, isBootstrapType } from "../core/base/bootstrap.js";
import { IAttr, IElem } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { args } from "../core/fn/args.js";
import { div } from "../tag/div.js";

const convert = (attr: IAttr): IAttr => {
	attr = mergeObject(attr, {
		container: true,
	});

	return attr;
};

export class container extends div {
	constructor(); //#default
	constructor(elem: IElem); //#0
	constructor(size: bootstrapType.container, elem: IElem); //#1
	constructor(attr: IAttr, elem: IElem); //#2
	constructor(...arg: any[]) {
		let rules = [
			"string|tag|string[]|tag[]",
			["string[]|boolean[]", "string|tag|string[]|tag[]"],
			["object", "string|tag|string[]|tag[]"],
		];

		switch (args("ctl.container", arg, rules)) {
			case 0:
				super(convert({}), arg[0]);
				break;
			case 1:
				super(convert({ container: arg[0] }), arg[1]);
				break;
			case 2:
				super(convert(arg[0]), arg[1]);
				break;
			default:
				super(convert({}), "");
				break;
		}

		// if (arg.length === 0) {
		// 	//#1
		// 	super(convert({}), "");
		// } else if (arg.length === 1) {
		// 	//#2
		// 	super(convert({}), arg[0]);
		// } else if (arg.length === 2) {
		// 	if (isBootstrapType(arg[0], bootstrapBase.container.concat())) {
		// 		//#3
		// 		super(convert({ container: arg[0] }), arg[1]);
		// 	} else {
		// 		//#4
		// 		super(convert(arg[0]), arg[1]);
		// 	}
		// }
	}
}
