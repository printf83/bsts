"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = exports.article = void 0;
const tag_js_1 = require("../core/tag.js");
class article extends tag_js_1.tag {
    constructor(...arg) {
        super("article", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.article = article;
const Article = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(article, AttrOrElem, Elem);
exports.Article = Article;
