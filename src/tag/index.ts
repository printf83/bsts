import { IAttr, IElem, ITag } from "../core/base/index.js";

export class tag implements ITag {
	public isbsts = true;

	public tag: string = "div";
	public elem?: IElem;
	public attr?: IAttr;
	public dom?: HTMLElement;

	constructor(tag: string);
	constructor(tag: string, elem?: IElem);
	constructor(tag: string, attr?: IAttr, elem?: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 3) {
			this.tag = arg[0];
			this.attr = arg[1];
			this.elem = arg[2];
		} else if (arg.length === 2) {
			this.tag = arg[0];
			this.elem = arg[1];
		} else if (arg.length === 1) {
			this.tag = arg[0];
		}
	}
}

export const isTag = (obj: any): boolean => {
	return typeof obj === "object" && "isbsts" in obj && obj["isbsts"] === true;
};
