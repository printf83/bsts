import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { code } from "../../html/code.js";
import { pre } from "../../html/pre.js";

declare var html_beautify: {
	(js_source_text: string, options?: js_beautify.JSBeautifyOptions): string;
	html: (js_source_text: string, options?: js_beautify.HTMLBeautifyOptions) => string;
	html_beautify: (js_source_text: string, options?: js_beautify.HTMLBeautifyOptions) => string;
};

const beautify = (str: string): string => {
	str = str.replace(/\>/g, ">\n");
	str = str.replace(/\</g, "\n<");

	return html_beautify(str, {
		preserve_newlines: false,
		end_with_newline: true,
		indent_size: 4,
	}) as string;
};

const convert = (attr: IAttr) => {
	new pre({ style: { maxHeight: "200px" }, display: "block", overflow: "auto" });

	if (attr.elem) {
		attr.elem = new code(
			{ class: ["prettyprint", "lang-html"], margin: 0, lang: "html", border: false },
			typeof attr.elem === "string" ? beautify(attr.elem) : attr.elem
		);
	} else {
		attr.elem = new code({ class: ["prettyprint", "lang-html"], margin: 0, lang: "html", border: false }, "");
	}

	return attr;
};

export class htmlContainer extends pre {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg("elem", convert, arg));
	}
}
