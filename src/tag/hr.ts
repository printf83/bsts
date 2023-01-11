import { IAttr } from "../core/base/index.js";
import { tag } from "./index.js";

export class hr extends tag {
	constructor(public attr?: IAttr) {
		super("hr", undefined, attr);
	}
}
