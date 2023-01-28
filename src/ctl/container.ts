import { IAttr, IElem, isAttr } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../tag/div.js";

const convert = (attr: IAttr): IAttr => {
	attr = mergeObject(
		{
			container: true,
		},
		attr
	);

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttr>(arg[0])) {
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

	// constructor(); //#default
	// constructor(elem: IElem); //#0
	// constructor(size: bootstrapType.container); //#1
	// constructor(size: bootstrapType.container, elem: IElem); //#2
	// constructor(attr: IAttr); //#3
	// constructor(attr: IAttr, elem: IElem); //#4
	// constructor(...arg: any[]) {
	// 	let rules = [
	// 		["string|tag|string[]|tag[]"],
	// 		["string|boolean|string[]|boolean[]"],
	// 		["string|boolean|string[]|boolean[]", "string|tag|string[]|tag[]"],
	// 		["object"],
	// 		["object", "string|tag|string[]|tag[]"],
	// 	];

	// 	switch (args("ctl.container", arg, rules)) {
	// 		case 0:
	// 			console.log("#0");
	// 			super(convert({}), arg[0]);
	// 			break;
	// 		case 1:
	// 			console.log("#1");
	// 			super(convert({ container: arg[0] }), "");
	// 			break;
	// 		case 2:
	// 			console.log("#2");
	// 			super(convert({ container: arg[0] }), arg[1]);
	// 			break;
	// 		case 3:
	// 			console.log("#3");
	// 			super(convert(arg[0]), "");
	// 			break;
	// 		case 4:
	// 			console.log("#4");
	// 			super(convert(arg[0]), arg[1]);
	// 			break;
	// 		default:
	// 			console.log("#default");
	// 			super(convert({}), "");
	// 			break;
	// 	}
	//  }
}
