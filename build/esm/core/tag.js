import { mergeObject } from "./mergeObject.js";
export class tag {
    isbsts = true;
    tag = "div";
    elem;
    attr;
    constructor(...arg) {
        if (arg) {
            if (arg.length === 1) {
                this.tag = arg[0];
            }
            else if (arg.length === 2) {
                this.tag = arg[0];
                if (arg[1]) {
                    this.elem = arg[1].elem;
                    delete arg[1].elem;
                    this.attr = arg[1];
                }
            }
            else {
                this.tag = "div";
            }
        }
        else {
            this.tag = "div";
        }
    }
}
//now new keyword for tag
export const Tag = (Tag, Attr) => {
    return new tag(Tag, Attr);
};
export class strHtml {
    ishtml = true;
    elem;
    constructor(...arg) {
        if (arg) {
            this.elem = arg[0];
        }
        else {
            this.elem = "";
        }
    }
}
//now new keyword for tag
export const StrHtml = (Html) => {
    return new strHtml(Html);
};
export const isTag = (obj) => {
    return typeof obj === "object" && !Array.isArray(obj) && "isbsts" in obj && obj["isbsts"] === true;
};
export const isHtml = (obj) => {
    return typeof obj === "object" && !Array.isArray(obj) && "ishtml" in obj && obj["ishtml"] === true;
};
export const isAttr = (obj) => {
    return typeof obj === "object" && !Array.isArray(obj) && !("isbsts" in obj) && !("ishtml" in obj);
};
export const tagConsNoElemArg = (arg) => {
    if (arg.length === 1) {
        return arg[0];
    }
    else {
        return {};
    }
};
export const tagConsArg = (prop, arg) => {
    if (arg.length === 1) {
        if (isAttr(arg[0])) {
            return arg[0];
        }
        else {
            return { [prop]: arg[0] };
        }
    }
    else if (arg.length === 2) {
        return mergeObject({ [prop]: arg[1] }, arg[0]);
    }
    else {
        return {};
    }
};
const createTag = (TagClass, ...ctorArgs) => {
    return new TagClass(...ctorArgs);
};
export const genTagClass = (TagClass, AttrOrElem, Elem) => {
    if (AttrOrElem) {
        if (isAttr(AttrOrElem)) {
            if (Elem) {
                return createTag(TagClass, AttrOrElem, Elem);
            }
            else {
                return createTag(TagClass, AttrOrElem);
            }
        }
        else {
            return createTag(TagClass, AttrOrElem);
        }
    }
    else {
        return createTag(TagClass);
    }
};
