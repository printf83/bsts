import { mergeObject } from "./util/mergeObject.js";
import { tag as ITag } from "../interface/core/tag.js";
import { elem } from "../interface/core/elem.js";
import { attr } from "../interface/core/attr.js";

/**
 * The tag class implements the ITag interface and represents a BSTS tag.
 * It contains properties for the tag name, attributes, and child elements.
 * The constructor allows creating a tag with different configurations of name, attributes, and elements.
 * Additional helper functions are exported for checking if an object is a tag or attributes object.
 */
export class tag implements ITag {
	public isbsts = true;

	public tag: string = "div";
	public elem?: elem | elem[];
	public attr?: attr;

	constructor();
	constructor(tag: string);
	constructor(tag: string, attr: attr);
	constructor(...arg: any[]) {
		if (arg) {
			if (arg.length === 1) {
				this.tag = arg[0];
			} else if (arg.length === 2) {
				this.tag = arg[0];

				this.attr = this.convert(arg[1]);

				if (this.attr && this.attr.elem) {
					this.elem = this.attr.elem;
					delete this.attr.elem;
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

/**
 * Checks if the given object is a BSTS tag instance.
 * Returns true if obj is an object, not an array,
 * has an isbsts property set to true.
 */
export const isTag = <T>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && "isbsts" in obj && obj["isbsts"] === true;
};

/**
 * Checks if the given object is a BSTS attributes object.
 * Returns true if obj is an object, not an array,
 * and does not have isbsts or ishtml properties.
 */
export const isAttr = <T>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && !("isbsts" in obj) && !("ishtml" in obj);
};

/**
 * Constructs a tag attribute object from arguments, without adding any elements.
 *
 * Accepts a single argument array. If the array has one element, returns that element cast to T.
 * Otherwise returns an empty object cast to T.
 */
export const tagConstructorNoElement = <T extends attr>(arg: any[]): T => {
	if (arg.length === 1) {
		return arg[0] as T;
	} else {
		return {} as T;
	}
};

/**
 * Constructs a tag attribute object from arguments.
 *
 * Accepts the tag name and an argument array.
 * If one argument, returns it cast to T.
 * If two arguments, merges them into a new object.
 * Otherwise returns empty object.
 */
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
