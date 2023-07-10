import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class article extends tag {
    constructor(...arg) {
        super("article", tagConsArg("elem", arg));
    }
}
export const Article = (AttrOrElem, Elem) => genTagClass(article, AttrOrElem, Elem);
