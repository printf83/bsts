import { tagConsArg, IAttr, tag, genTagClass } from "../core/tag.js";

export interface ITagStyle extends IAttr {
	media?: string;
	type?: "text/css";
}

export class style extends tag {
	constructor();
	constructor(elem: string);
	constructor(attr: ITagStyle);
	constructor(attr: ITagStyle, elem: string);
	constructor(...arg: any[]) {
		super("style", tagConsArg<ITagStyle>("elem", arg));
	}
}

export const Style = (AttrOrElem?: ITagStyle | string, Elem?: string) =>
	genTagClass<style, ITagStyle>(style, AttrOrElem, Elem);
