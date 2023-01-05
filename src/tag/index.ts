import { baseAttr, baseElem, baseTag } from "../core/base/index.js";

export class tag implements baseTag {
	public isbsts = true;
	public dom: HTMLElement;

	constructor(public tag: string, public elem?: baseElem, public attr?: baseAttr) {}
}

export const isTag = (obj: any): boolean => {
	return typeof obj === "object" && "isbsts" in obj && obj["isbsts"] === true;
};
