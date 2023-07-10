"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popover = exports.popover = void 0;
const tag_js_1 = require("../core/tag.js");
const bootstrap_js_1 = require("../core/bootstrap.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const span_js_1 = require("../html/span.js");
const eventManager_js_1 = require("../core/eventManager.js");
const console_js_1 = require("../core/console.js");
const bootstrap_1 = require("bootstrap");
const convert = (attr) => {
    attr.inline ??= true;
    attr.autoInit ??= true;
    let JDelay = undefined;
    if (attr.showDelay && attr.hideDelay) {
        JDelay = JSON.stringify({ show: attr.showDelay, hide: attr.hideDelay });
    }
    else if (attr.showDelay && !attr.hideDelay) {
        JDelay = JSON.stringify({ show: attr.showDelay });
    }
    else if (!attr.showDelay && attr.hideDelay) {
        JDelay = JSON.stringify({ hide: attr.hideDelay });
    }
    attr = (0, mergeObject_js_1.mergeObject)({
        display: attr.inline ? "inline-block" : attr.display,
        tabindex: "0",
        data: {
            "bs-toggle": attr.autoInit ? "popover" : undefined,
            "bs-custom-class": attr.customClass,
            "bs-title": attr.title,
            "bs-content": attr.content,
            "bs-container": attr.parent,
            "bs-placement": attr.placement,
            "bs-trigger": attr.trigger
                ? Array.isArray(attr.trigger)
                    ? attr.trigger.join(" ")
                    : attr.trigger
                : undefined,
            "bs-html": attr.allowHtml === true ? "true" : undefined,
            "bs-animation": attr.animation === false ? "false" : undefined,
            "bs-allow-list": JSON.stringify(attr.allowList),
            "bs-boundary": attr.boundary,
            "bs-delay": attr.delay ? attr.delay.toString() : JDelay,
            "bs-fallback-placement": attr.fallbackPlacement
                ? Array.isArray(attr.fallbackPlacement)
                    ? attr.fallbackPlacement.join(" ")
                    : attr.fallbackPlacement
                : undefined,
            "bs-offset": attr.viewOffset
                ? Array.isArray(attr.viewOffset)
                    ? attr.viewOffset.join(",")
                    : attr.viewOffset
                : undefined,
            "bs-popper-config": attr.popperConfig ? JSON.stringify(attr.popperConfig) : undefined,
            "bs-sanitize": attr.sanitize ? (attr.sanitize === true ? "true" : "false") : undefined,
            "bs-sanitize-fn": attr.sanitizeFn,
            "bs-selector": attr.selector ? attr.selector : undefined,
            "bs-template": attr.template,
        },
        on: {
            build: (e) => {
                const target = e.target;
                popover.init(target);
            },
        },
    }, attr);
    delete attr.inline;
    delete attr.trigger;
    delete attr.title;
    delete attr.content;
    delete attr.placement;
    delete attr.customClass;
    delete attr.parent;
    delete attr.allowHtml;
    delete attr.autoInit;
    delete attr.allowList;
    delete attr.animation;
    delete attr.boundary;
    delete attr.showDelay;
    delete attr.hideDelay;
    delete attr.delay;
    delete attr.fallbackPlacement;
    delete attr.viewOffset;
    delete attr.popperConfig;
    delete attr.sanitize;
    delete attr.sanitizeFn;
    delete attr.selector;
    delete attr.template;
    return attr;
};
class popover extends span_js_1.span {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
    static init = (elem, options) => {
        return popover.getOrCreateInstance(elem, options);
    };
    static getInstance = (elem) => {
        return bootstrap_1.Popover.getInstance(elem);
    };
    static getOrCreateInstance = (elem, options) => {
        (0, eventManager_js_1.addEvent)("destroy", elem, (i) => {
            const target = i.target;
            console_js_1.bstsConsole.info(`Dispose bootstrap popover from $1`, target);
            const m = popover.getInstance(target);
            if (m) {
                m.hide();
                m.dispose();
            }
        });
        console_js_1.bstsConsole.info(`Initialize bootstrap popover to $1`, elem);
        return bootstrap_1.Popover.getOrCreateInstance(elem, options);
    };
    static disable = (elem) => {
        popover.getOrCreateInstance(elem)?.disable();
    };
    static dispose = (elem) => {
        popover.getInstance(elem)?.dispose();
    };
    static enable = (elem) => {
        popover.getOrCreateInstance(elem)?.enable();
    };
    static hide = (elem) => {
        popover.getOrCreateInstance(elem)?.hide();
    };
    static show = (elem) => {
        popover.getOrCreateInstance(elem)?.show();
    };
    static setContent = (elem, content) => {
        popover.getOrCreateInstance(elem)?.setContent(content);
    };
    static toggle = (elem) => {
        popover.getOrCreateInstance(elem)?.toggle();
    };
    static toggleEnabled = (elem) => {
        popover.getOrCreateInstance(elem)?.toggleEnabled();
    };
    static update = (elem) => {
        popover.getOrCreateInstance(elem)?.update();
    };
}
exports.popover = popover;
const Popover = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(popover, AttrOrElem, Elem);
exports.Popover = Popover;
