import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { img as HImg } from "../html/img.js";
import { img as Img } from "../interface/bootstrap/img.js";

/**
 * Extends the HImg HTML image element and adds Bootstrap functionality.
 * Allows setting image properties like fluid and thumbnail via the constructor.
 * Handles converting those properties to Bootstrap classes.
 */
export class img extends HImg {
	constructor();
	constructor(src: string);
	constructor(attr: Img);
	constructor(attr: Img, src: string);
	constructor(...arg: any[]) {
		super(bsConstructor<Img>("src", arg));
	}

	convert(attr: Img) {
		attr = mergeObject(
			{
				class: [attr.fluid ? "img-fluid" : undefined, attr.thumbnail ? "img-thumbnail" : undefined],
			},
			attr
		);

		delete attr.fluid;
		delete attr.thumbnail;
		return super.convert(attr);
	}
}
