import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { UUID } from "../core/util/uuid.js";
import { textarea as TTextarea } from "../html/textarea.js";
import { textarea as Textarea } from "../interface/bootstrap/textarea.js";

/**
 * Textarea component class. Extends the base Textarea component with
 * additional functionality like default styling.
 */
export class textarea extends TTextarea {
	constructor();
	constructor(value: string);
	constructor(attr: Textarea);
	constructor(attr: Textarea, value: string);
	constructor(...arg: any[]) {
		super(bsConstructor<Textarea>("value", arg));
	}

	convert(attr: Textarea) {
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
		return super.convert(attr);
	}
}
