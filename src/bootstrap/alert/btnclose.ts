import { bsConstructorNoElement } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";

import { btnclose as TBtnclose } from "../btnclose.js";
import { btnclose as Btnclose } from "../../interface/bootstrap/alert/btnclose.js";

export class btnclose extends TBtnclose {
	constructor();
	constructor(attr: Btnclose);
	constructor(...arg: any[]) {
		super(bsConstructorNoElement(arg));
	}

	convert(attr: Btnclose) {
		attr.dismiss ??= "alert";

		attr = mergeObject(
			{
				data: { "bs-dismiss": attr.dismiss },
			},
			attr
		);

		delete attr.dismiss;
		return super.convert(attr);
	}
}
