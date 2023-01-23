import { mergeObject } from "../core/fn/mergeObject.js";
import { UUID } from "../core/fn/uuid.js";
import { IAttrTagInput, input as TInput } from "../tag/input.js";

export interface IAttrBSInput extends IAttrTagInput {
	weight?: "sm" | "lg";
}

const convert = (attr: IAttrBSInput) => {
	attr = mergeObject(attr, {
		id: attr.id || UUID(),
		type: attr.type || "text",
		class: [
			attr.type === "color" ? "form-control-color" : "",
			attr.readonly ? "form-control-plaintext" : "form-control",
			attr.weight ? `form-control-${attr.weight}` : "",
		],
	});

	delete attr.weight;

	return attr;
};

export class input extends TInput {
	constructor(); //#1
	constructor(value: string); //#2
	constructor(attr: IAttrBSInput); //#3
	constructor(attr: IAttrBSInput, value: string); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				//#2
				super(convert({ value: arg[0] }));
			} else {
				//#3
				super(convert(arg[0]));
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(mergeObject(arg[0], { value: arg[1] })));
		}
	}
}
