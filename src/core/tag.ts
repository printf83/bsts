import { mergeObject } from "./util/mergeObject.js";
import { tag as ITag } from "../interface/core/tag.js";
import { html as IHtml } from "../interface/core/html.js";
import { elem } from "../interface/core/elem.js";
import { attr } from "../interface/core/attr.js";

export class tag implements ITag {
	public isbsts = true;

	public tag: string = "div";
	public elem?: elem | elem[];
	public attr?: attr;

	constructor();
	constructor(tag: string);
	constructor(tag: string, attr?: attr);
	constructor(...arg: any[]) {
		if (arg) {
			if (arg.length === 1) {
				this.tag = arg[0];
			} else if (arg.length === 2) {
				this.tag = arg[0];

				if (arg[1]) {
					this.elem = arg[1].elem;
					delete arg[1].elem;
					this.attr = arg[1];
				}
			} else {
				this.tag = "div";
			}
		} else {
			this.tag = "div";
		}
	}
}

export class strHtml implements IHtml {
	public ishtml = true;
	public elem?: string;

	constructor();
	constructor(elem: string);
	constructor(...arg: any[]) {
		if (arg) {
			this.elem = arg[0];
		} else {
			this.elem = "";
		}
	}
}

export const isTag = <T>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && "isbsts" in obj && obj["isbsts"] === true;
};

export const isHtml = <T extends strHtml>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && "ishtml" in obj && obj["ishtml"] === true;
};

export const isAttr = <T>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && !("isbsts" in obj) && !("ishtml" in obj);
};

export const tagConsNoElemArg = <T extends attr>(arg: any[]): T => {
	if (arg.length === 1) {
		return arg[0] as T;
	} else {
		return {} as T;
	}
};

export const tagConsArg = <T extends attr>(prop: string, arg: any[]): T => {
	if (arg.length === 1) {
		if (isAttr<T>(arg[0])) {
			return arg[0] as T;
		} else {
			return { [prop]: arg[0] } as T;
		}
	} else if (arg.length === 2) {
		return mergeObject<T>({ [prop]: arg[1] } as T, arg[0]);
	} else {
		return {} as T;
	}
};
