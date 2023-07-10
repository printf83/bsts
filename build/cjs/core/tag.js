"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genTagClass = exports.tagConsArg = exports.tagConsNoElemArg = exports.isAttr = exports.isHtml = exports.isTag = exports.StrHtml = exports.strHtml = exports.Tag = exports.tag = void 0;
const mergeObject_js_1 = require("./mergeObject.js");
class tag {
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
exports.tag = tag;
//now new keyword for tag
const Tag = (Tag, Attr) => {
    return new tag(Tag, Attr);
};
exports.Tag = Tag;
class strHtml {
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
exports.strHtml = strHtml;
//now new keyword for tag
const StrHtml = (Html) => {
    return new strHtml(Html);
};
exports.StrHtml = StrHtml;
const isTag = (obj) => {
    return typeof obj === "object" && !Array.isArray(obj) && "isbsts" in obj && obj["isbsts"] === true;
};
exports.isTag = isTag;
const isHtml = (obj) => {
    return typeof obj === "object" && !Array.isArray(obj) && "ishtml" in obj && obj["ishtml"] === true;
};
exports.isHtml = isHtml;
const isAttr = (obj) => {
    return typeof obj === "object" && !Array.isArray(obj) && !("isbsts" in obj) && !("ishtml" in obj);
};
exports.isAttr = isAttr;
const tagConsNoElemArg = (arg) => {
    if (arg.length === 1) {
        return arg[0];
    }
    else {
        return {};
    }
};
exports.tagConsNoElemArg = tagConsNoElemArg;
const tagConsArg = (prop, arg) => {
    if (arg.length === 1) {
        if ((0, exports.isAttr)(arg[0])) {
            return arg[0];
        }
        else {
            return { [prop]: arg[0] };
        }
    }
    else if (arg.length === 2) {
        return (0, mergeObject_js_1.mergeObject)({ [prop]: arg[1] }, arg[0]);
    }
    else {
        return {};
    }
};
exports.tagConsArg = tagConsArg;
const createTag = (TagClass, ...ctorArgs) => {
    return new TagClass(...ctorArgs);
};
const genTagClass = (TagClass, AttrOrElem, Elem) => {
    if (AttrOrElem) {
        if ((0, exports.isAttr)(AttrOrElem)) {
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
exports.genTagClass = genTagClass;
