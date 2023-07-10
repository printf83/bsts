import { tagConsArg, tag, isAttr } from "../core/tag.js";
export class h extends tag {
    constructor(...arg) {
        if (arg) {
            if (arg.length > 1) {
                let l = arg.shift();
                super(`h${l}`, tagConsArg("elem", arg));
            }
            else {
                super(`h${arg[0]}`);
            }
        }
        else {
            super("h1");
        }
    }
}
export const H = (Level, AttrOrElem, Elem) => {
    if (AttrOrElem) {
        if (isAttr(AttrOrElem)) {
            if (Elem) {
                return new h(Level, AttrOrElem, Elem);
            }
            else {
                return new h(Level, AttrOrElem);
            }
        }
        else {
            return new h(Level, AttrOrElem);
        }
    }
    else {
        return new h(Level);
    }
};
