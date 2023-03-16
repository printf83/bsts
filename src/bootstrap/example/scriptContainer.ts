import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { code } from "../../html/code.js";
import { pre } from "../../html/pre.js";

const beautify = (str: string): string => {
	return window.js_beautify(str, {
		preserve_newlines: true,
		end_with_newline: true,
		brace_style: "collapse",
	});
};

const convert = (attr: IAttr) => {
	new pre({ style: { maxHeight: "200px" }, display: "block", overflow: "auto" });

	if (attr.elem) {
		attr.elem = new code(
			{ class: ["prettyprint", "lang-js"], margin: 0, lang: "js", border: false },
			typeof attr.elem === "string" ? beautify(`let example = ${attr.elem};`) : attr.elem
		);
	} else {
		attr.elem = new code({ class: ["prettyprint", "lang-js"], margin: 0, lang: "js", border: false }, "");
	}

	return attr;
};

export class scriptContainer extends pre {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg("elem", convert, arg));
	}
}
