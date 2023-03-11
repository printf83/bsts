import { conProp } from "../core/fn/arg.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { UUID } from "../core/fn/uuid.js";
import { IAttrTagTextarea, textarea as TTextarea } from "../ht/textarea.js";

export interface IAttrBSTextarea extends IAttrTagTextarea {
	weight?: "sm" | "lg";
}

const convert = (attr: IAttrBSTextarea) => {
	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: [
				attr.readonly !== true ? "form-control" : "",
				attr.readonly ? "form-control-plaintext" : "",
				attr.weight ? `form-control-${attr.weight}` : "",
			],
		},
		attr
	);

	delete attr.weight;

	return attr;
};

export class textarea extends TTextarea {
	constructor(); //#1
	constructor(value: string); //#2
	constructor(attr: IAttrBSTextarea); //#3
	constructor(attr: IAttrBSTextarea, value: string); //#4
	constructor(...arg: any[]) {
		super(conProp<IAttrBSTextarea>("value", convert, arg));
	}
}
