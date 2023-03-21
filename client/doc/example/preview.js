import { bsConstArg } from "../../src/core/base/bootstrap.js";
import { code as TCode } from "../../src/html/code.js";
import { pre } from "../../src/html/pre.js";
import { mergeObject } from "../../src/core/fn/mergeObject.js";
const beautify = (type, source_text) => {
    switch (type) {
        case "html":
            source_text = source_text.replace(/\>/g, ">\n");
            source_text = source_text.replace(/\</g, "\n<");
            return html_beautify(source_text, {
                preserve_newlines: false,
                end_with_newline: true,
                indent_size: 2,
            });
        case "css":
            return css_beautify(source_text, {
                preserve_newlines: false,
                end_with_newline: true,
                indent_size: 2,
            });
        default:
            return js_beautify(source_text, {
                preserve_newlines: true,
                end_with_newline: true,
                indent_size: 2,
            });
            break;
    }
};
const convert = (attr) => {
    attr = mergeObject({
        style: { maxHeight: "300px", display: "block", overflow: "auto" },
    }, attr);
    attr.elem = new TCode({ class: ["prettyprint", `lang-${attr.type}`], margin: 0, lang: attr.type, border: false }, attr.elem ? (typeof attr.elem === "string" ? beautify(attr.type, attr.elem) : attr.elem) : "");
    delete attr.type;
    return attr;
};
export class preview extends pre {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
