import { IAttr, IElem, genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { div } from "../html/div.js";

const convert = (attr: IAttr) => {
	attr = mergeObject(
		{
			container: true,
		},
		attr
	);

	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Container = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<container, IAttr>(container, AttrOrElem, Elem);
