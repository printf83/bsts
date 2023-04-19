import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagPicture extends IAttr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;
}

export class picture extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagPicture);
	constructor(attr: ITagPicture, elem: IElem);
	constructor(...arg: any[]) {
		super("picture", tagConsArg<ITagPicture>("elem", arg));
	}
}

export const Picture = (AttrOrElem?: ITagPicture | IElem, Elem?: IElem) =>
	genTagClass<picture, ITagPicture>(picture, AttrOrElem, Elem);
