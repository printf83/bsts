import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagDetails extends IAttr {
	open?: boolean;
}

export class details extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagDetails);
	constructor(attr: ITagDetails, elem: IElem);
	constructor(...arg: any[]) {
		super("details", tagConsArg<ITagDetails>("elem", arg));
	}
}

export const Details = (AttrOrElem?: ITagDetails | IElem, Elem?: IElem) =>
	genTagClass<details, ITagDetails>(details, AttrOrElem, Elem);
