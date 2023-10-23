import { mergeObject } from "./util/mergeObject.js";
import { tag as ITag } from "../interface/core/tag.js";
import { elem } from "../interface/core/elem.js";
import { attr } from "../interface/core/attr.js";

export class tag implements ITag {
	public istag = true;

	public tag: string = "div";
	public elem?: elem | elem[];
	public attr?: attr;

	constructor();
	constructor(tag: string);
	constructor(tag: string, attr: attr);
	constructor(tag: string, elem: elem | elem[]);
	constructor(tag: string, attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		if (arg) {
			if (arg.length === 1) {
				this.tag = arg[0];
			} else if (arg.length === 2) {
				this.tag = arg[0];

				if (isAttr<attr>(arg[1])) {
					this.elem = arg[1].elem;

					delete arg[1].elem;
					this.attr = this.convert(arg[1]);

					if (this.attr.elem) {
						this.elem = this.attr.elem;
						delete this.attr.elem;
					} else {
						this.elem = arg[2];
					}
				} else {
					this.elem = arg[1];
				}
			} else if (arg.length === 3) {
				delete arg[1].elem;

				this.tag = arg[0];
				this.attr = this.convert(arg[1]);

				if (this.attr.elem) {
					this.elem = this.attr.elem;
					delete this.attr.elem;
				} else {
					this.elem = arg[2];
				}
			} else {
				this.tag = "div";
			}
		} else {
			this.tag = "div";
		}
	}

	convert(attr: attr): attr {
		return attr;
	}
}

// export class tag implements ITag {
// 	public isbsts = true;

// 	public tag: string = "div";
// 	public elem?: elem | elem[];
// 	public attr?: attr;

// 	constructor();
// 	constructor(tag: string);
// 	constructor(tag: string, attr?: attr);
// 	constructor(...arg: any[]) {
// 		if (arg) {
// 			if (arg.length === 1) {
// 				this.tag = arg[0];
// 			} else if (arg.length === 2) {
// 				this.tag = arg[0];

// 				if (arg[1]) {
// 					this.elem = arg[1].elem;
// 					delete arg[1].elem;
// 					this.attr = arg[1];
// 				}
// 			} else {
// 				this.tag = "div";
// 			}
// 		} else {
// 			this.tag = "div";
// 		}
// 	}
// }

export const isTag = <T>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && "isbsts" in obj && obj["isbsts"] === true;
};

export const isAttr = <T>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && !("isbsts" in obj) && !("ishtml" in obj);
};

export const tagConstructorNoElement = <T extends attr>(arg: any[]): T => {
	if (arg.length === 1) {
		return arg[0] as T;
	} else {
		return {} as T;
	}
};

export const tagConstructor = <T extends attr>(prop: string, arg: any[]): T => {
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
