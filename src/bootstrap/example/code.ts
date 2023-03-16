import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { code as TCode } from "../../html/code.js";
import { pre } from "../../html/pre.js";
import { mergeObject } from "../../core/fn/mergeObject.js";

type IAttrBSExampleCodeType = "js" | "ts" | "html" | "css";

export interface IAttrBSExampleCode extends IAttr {
	type?: IAttrBSExampleCodeType;
}

declare var js_beautify: {
	(js_source_text: string, options?: js_beautify.JSBeautifyOptions): string;
	js: (js_source_text: string, options?: js_beautify.JSBeautifyOptions) => string;
	js_beautify: (js_source_text: string, options?: js_beautify.JSBeautifyOptions) => string;
};

declare var css_beautify: {
	(js_source_text: string, options?: js_beautify.CSSBeautifyOptions): string;
	css: (js_source_text: string, options?: js_beautify.CSSBeautifyOptions) => string;
	css_beautify: (js_source_text: string, options?: js_beautify.CSSBeautifyOptions) => string;
};

declare var html_beautify: {
	(js_source_text: string, options?: js_beautify.JSBeautifyOptions): string;
	html: (js_source_text: string, options?: js_beautify.HTMLBeautifyOptions) => string;
	html_beautify: (js_source_text: string, options?: js_beautify.HTMLBeautifyOptions) => string;
};

const beautify = (type: IAttrBSExampleCodeType | undefined, source_text: string): string => {
	switch (type) {
		case "html":
			source_text = source_text.replace(/\>/g, ">\n");
			source_text = source_text.replace(/\</g, "\n<");

			return html_beautify(source_text, {
				preserve_newlines: false,
				end_with_newline: true,
				indent_size: 2,
			}) as string;

		case "css":
			return css_beautify(source_text, {
				preserve_newlines: false,
				end_with_newline: true,
				indent_size: 4,
			}) as string;

		default:
			return js_beautify(source_text, {
				preserve_newlines: false,
				end_with_newline: true,
				indent_size: 4,
			}) as string;
			break;
	}
};

const convert = (attr: IAttrBSExampleCode) => {
	attr = mergeObject(
		{
			style: { maxHeight: "200px", display: "block", overflow: "auto" },
		},
		attr
	);

	attr.elem = new TCode(
		{ class: ["prettyprint", `lang-${attr.type}`], margin: 0, lang: attr.type, border: false },
		attr.elem ? (typeof attr.elem === "string" ? beautify(attr.type, attr.elem) : attr.elem) : ""
	);

	delete attr.type;

	return attr;
};

export class code extends pre {
	constructor(); //#1
	constructor(attr: IAttrBSExampleCode); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSExampleCode, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSExampleCode>("elem", convert, arg));
	}
}
