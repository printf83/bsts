import { tagConsArg, IAttr, tag, genTagClass } from "../core/tag.js";

export interface Style extends IAttr {
	media?: string;
	type?: "text/css";
}

export class style extends tag {
	constructor();
	constructor(elem: string);
	constructor(attr: Style);
	constructor(attr: Style, elem: string);
	constructor(...arg: any[]) {
		super("style", tagConsArg<Style>("elem", arg));
	}
}

export const Style = (AttrOrElem?: Style | string, Elem?: string) => genTagClass<style, Style>(style, AttrOrElem, Elem);
