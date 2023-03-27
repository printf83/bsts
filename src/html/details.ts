import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface IAttrTagDetails extends IAttr {
	open?: boolean;
}

export class details extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagDetails);
	constructor(attr: IAttrTagDetails, elem: IElem);
	constructor(...arg: any[]) {
		super("details", tagConsArg<IAttrTagDetails>("elem", arg));
	}
}
