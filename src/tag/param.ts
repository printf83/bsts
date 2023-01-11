import { IAttrName, IAttrValue, IElem } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagParam extends IAttrName, IAttrValue {}

export class param extends tag {
	constructor(public name: string, public value: string, public attr?: IAttrTagParam) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { name: name, value: value });
		} else {
			attr = { name: name, value: value };
		}

		super("param", undefined, attr);
	}
}
