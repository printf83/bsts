"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = exports.tooltip = void 0;
const tag_js_1 = require("../core/tag.js");
const bootstrap_js_1 = require("../core/bootstrap.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const span_js_1 = require("../html/span.js");
const eventManager_js_1 = require("../core/eventManager.js");
const console_js_1 = require("../core/console.js");
const bootstrap_1 = require("bootstrap");
const convert = (attr) => {
    attr.autoInit ??= true;
    attr.inline ??= true;
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
        display: attr.inline ? "inline-block" : undefined,
        tabindex: "0",
        data: {
            "bs-toggle": attr.autoInit ? "tooltip" : undefined,
            "bs-custom-class": attr.customClass,
            "bs-title": attr.content,
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
                tooltip.init(target);
            },
        },
    }, attr);
    delete attr.inline;
    delete attr.trigger;
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
class tooltip extends span_js_1.span {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
    static init = (elem, options) => {
        return tooltip.getOrCreateInstance(elem, options);
    };
    static getInstance = (elem) => {
        return bootstrap_1.Tooltip.getInstance(elem);
    };
    static getOrCreateInstance = (elem, options) => {
        (0, eventManager_js_1.addEvent)("destroy", elem, (i) => {
            const target = i.target;
            const m = tooltip.getInstance(target);
            if (m) {
                console_js_1.bstsConsole.info(`Dispose bootstrap tooltip from $1`, target);
                m.hide();
                m.dispose();
            }
        });
        console_js_1.bstsConsole.info(`Initialize bootstrap tooltip to $1`, elem);
        return bootstrap_1.Tooltip.getOrCreateInstance(elem, options);
    };
    static disable = (elem) => {
        tooltip.getOrCreateInstance(elem)?.disable();
    };
    static dispose = (elem) => {
        tooltip.getInstance(elem)?.dispose();
    };
    static enable = (elem) => {
        tooltip.getOrCreateInstance(elem)?.enable();
    };
    static hide = (elem) => {
        tooltip.getOrCreateInstance(elem)?.hide();
    };
    static show = (elem) => {
        tooltip.getOrCreateInstance(elem)?.show();
    };
    static setContent = (elem, content) => {
        tooltip.getOrCreateInstance(elem)?.setContent(content);
    };
    static toggle = (elem) => {
        tooltip.getOrCreateInstance(elem)?.toggle();
    };
    static toggleEnabled = (elem) => {
        tooltip.getOrCreateInstance(elem)?.toggleEnabled();
    };
    static update = (elem) => {
        tooltip.getOrCreateInstance(elem)?.update();
    };
}
exports.tooltip = tooltip;
const Tooltip = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(tooltip, AttrOrElem, Elem);
exports.Tooltip = Tooltip;
