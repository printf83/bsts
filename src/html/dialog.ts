import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagDialog extends IAttr {
	open?: boolean;
}

export class dialog extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagDialog);
	constructor(attr: ITagDialog, elem: IElem);
	constructor(...arg: any[]) {
		super("dialog", tagConsArg<ITagDialog>("elem", arg));
	}
}

export const Dialog = (AttrOrElem?: ITagDialog | IElem, Elem?: IElem) =>
	genTagClass<dialog, ITagDialog>(dialog, AttrOrElem, Elem);
