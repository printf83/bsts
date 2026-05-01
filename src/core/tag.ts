import { mergeObject } from "./util/mergeObject.js";
import { tag as ITag } from "../interface/core/tag.js";
import { elem } from "../interface/core/elem.js";
import { attr } from "../interface/core/attr.js";

export type TagConstructorArg = [] | [string] | [string, attr];
export type TagElementConstructorArg = [] | [elem | elem[]] | [attr] | [attr, elem | elem[]];
export type tagConstructorArgs<T = attr> = [] | [elem | elem[]] | [T] | [T, elem | elem[]];
export type tagConstructorArgsNoElement<T extends attr = attr> = [] | [T] | [elem | elem[]];

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
	constructor(...arg: TagConstructorArg) {
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
export const isTag = <T>(obj: unknown): obj is T => {
	return (
		typeof obj === "object" &&
		obj !== null &&
		!Array.isArray(obj) &&
		"isbsts" in obj &&
		(obj as Record<string, unknown>)["isbsts"] === true
	);
};

/**
 * Checks if the given object is a BSTS attributes object.
 * Returns true if obj is an object, not an array,
 * and does not have isbsts or ishtml properties.
 */
export const isAttr = <T>(obj: unknown): obj is T => {
	return typeof obj === "object" && obj !== null && !Array.isArray(obj) && !("isbsts" in obj) && !("ishtml" in obj);
};

/**
 * Constructs a tag attribute object from arguments, without adding any elements.
 *
 * Accepts a single attribute argument or no arguments.
 * If one argument is provided, returns it cast to T; otherwise returns an empty object.
 */
export const tagConstructorNoElement = <T extends attr>(arg: tagConstructorArgsNoElement<T>): T => {
	if (arg.length === 1) {
		return arg[0] as T;
	} else {
		return {} as T;
	}
};

/**
 * Constructs a tag attribute object from arguments.
 *
 * Accepts attribute and/or element arguments.
 * If one argument is an attributes object, returns it.
 * If one argument is an element value, returns { [prop]: element }.
 * If two arguments, merges element values into the attributes object.
 * Otherwise returns an empty object.
 */
export const tagConstructor = <T extends attr>(prop: string, arg: tagConstructorArgs<T>): T => {
	if (arg.length === 1) {
		if (isAttr<T>(arg[0])) {
			return arg[0] as T;
		} else {
			return { [prop]: arg[0] } as unknown as T;
		}
	} else if (arg.length === 2) {
		return mergeObject<T>({ [prop]: arg[1] } as unknown as T, arg[0] as T);
	} else {
		return {} as T;
	}
};
