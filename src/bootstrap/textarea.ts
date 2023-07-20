import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";

import { UUID } from "../core/uuid.js";
import { Textarea as ITextarea, textarea as TTextarea } from "../html/textarea.js";

export interface Textarea extends ITextarea {
	weight?: "sm" | "lg";
	isvalid?: boolean;
}

const convert = (attr: Textarea) => {
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
	constructor();
	constructor(value: string);
	constructor(attr: Textarea);
	constructor(attr: Textarea, value: string);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Textarea>("value", arg)));
	}
}
