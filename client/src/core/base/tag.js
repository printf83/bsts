import { mergeObject } from "../fn/mergeObject.js";
const convert = (attr) => {
    if (attr.theme || attr.label || attr.labelledby || attr.ownby || attr.describedby || attr.controlby) {
        attr = mergeObject({
            data: { "bs-theme": attr.theme },
            aria: {
                label: attr.label,
                labelledby: attr.labelledby,
                owns: attr.ownby,
                describedby: attr.describedby,
                controls: attr.controlby,
            },
        }, attr);
        delete attr.theme;
        delete attr.label;
        delete attr.labelledby;
        delete attr.ownby;
        delete attr.describedby;
        delete attr.controlby;
    }
    return attr;
};
export class tag {
    constructor(...arg) {
        this.isbsts = true;
        this.tag = "div";
        if (arg) {
            if (arg.length === 1) {
                this.tag = arg[0];
            }
            else if (arg.length === 2) {
                this.tag = arg[0];
                if (arg[1]) {
                    this.elem = arg[1].elem;
                    delete arg[1].elem;
                    this.attr = convert(arg[1]);
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
export const isTag = (obj) => {
    return typeof obj === "object" && !Array.isArray(obj) && "isbsts" in obj && obj["isbsts"] === true;
};
export const isAttr = (obj) => {
    return typeof obj === "object" && !Array.isArray(obj) && !("isbsts" in obj);
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
