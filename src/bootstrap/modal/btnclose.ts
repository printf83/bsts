import { bsConstructorNoElement } from "../../core/bootstrap.js";
import { tagConstructorArgsNoElement } from "../../core/tag.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { btnclose as BBtnclose } from "../btnclose.js";
import { btnclose as Btnclose } from "../../interface/bootstrap/modal/btnclose.js";

export class btnclose extends BBtnclose {
	constructor();
	constructor(attr: Btnclose);
	constructor(...arg: tagConstructorArgsNoElement<Btnclose>) {
		super(bsConstructorNoElement(arg));
	}

	convert(attr: Btnclose) {
		attr.dismiss ??= "modal";

		attr = mergeObject(
			{
				data: { "bs-dismiss": attr.dismiss, "bs-target": attr.target },
			},
			attr
		);

		delete attr.dismiss;
		delete attr.target;
		return super.convert(attr);
	}
}
