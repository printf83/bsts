import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagProgress extends IAttr {
	max?: number;
	value?: number;
}

export class progress extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagProgress);
	constructor(attr: ITagProgress, elem: IElem);
	constructor(...arg: any[]) {
		super("progress", tagConsArg<ITagProgress>("elem", arg));
	}
}

export const Progress = (AttrOrElem?: ITagProgress | IElem, Elem?: IElem) =>
	genTagClass<progress, ITagProgress>(progress, AttrOrElem, Elem);
