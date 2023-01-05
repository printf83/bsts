import { baseAttr, baseTag } from "../core/base/index.js";

export class tag implements baseTag {
	public bststag = true;

	constructor(public tag: string, public elem?: string | tag | (string | tag)[], public attr?: baseAttr) {
		console.log(attr);
	}
}

export const isTag = (obj: any): boolean => {
	return typeof obj === "object" && "bststag" in obj && obj["bststag"] === true;
};
