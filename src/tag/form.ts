import {
	IAttrAcceptCharset,
	IAttrAction,
	IAttrAutocomplete,
	IAttrEnctype,
	IAttrMethod,
	IAttrName,
	IAttrNovalidate,
	IAttrRel,
	IAttrTarget,
	IElem,
} from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagInput
	extends IAttrAcceptCharset,
		IAttrAction,
		IAttrAutocomplete,
		IAttrEnctype,
		IAttrMethod,
		IAttrName,
		IAttrNovalidate,
		IAttrRel,
		IAttrTarget {}

export class form extends tag {
	constructor(public attr?: IAttrTagInput, public elem?: IElem) {
		super("form", attr, elem);
	}
}
