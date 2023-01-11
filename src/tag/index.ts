import { IAttr, IElem, ITag } from "../core/base/index.js";

export class tag implements ITag {
	public isbsts = true;
	public dom?: HTMLElement;

	constructor(public tag: string, public elem?: IElem, public attr?: IAttr) {}
}

export const isTag = (obj: any): boolean => {
	return typeof obj === "object" && "isbsts" in obj && obj["isbsts"] === true;
};
