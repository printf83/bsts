import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { UUID } from "../core/uuid.js";
import { ITagTextarea, textarea as TTextarea } from "../html/textarea.js";

export interface IBsTextarea extends ITagTextarea {
	weight?: "sm" | "lg";
	isvalid?: boolean;
}

const convert = (attr: IBsTextarea) => {
	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: [
				attr.readonly !== true ? "form-control" : undefined,
				attr.readonly ? "form-control-plaintext" : undefined,
				attr.weight ? `form-control-${attr.weight}` : undefined,
				attr.isvalid !== undefined ? (attr.isvalid ? "is-valid" : "is-invalid") : undefined,
			],
		},
		attr
	);

	delete attr.weight;
	delete attr.isvalid;

	return attr;
};

export class textarea extends TTextarea {
	constructor(); //#1
	constructor(value: string); //#2
	constructor(attr: IBsTextarea); //#3
	constructor(attr: IBsTextarea, value: string); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsTextarea>("value", arg)));
	}
}
