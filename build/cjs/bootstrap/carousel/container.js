"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const div_js_1 = require("../../html/div.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const indicators = __importStar(require("./indicators/_index.js"));
const uuid_js_1 = require("../../core/uuid.js");
const inner = __importStar(require("./inner/_index.js"));
const _fn_js_1 = require("./_fn.js");
const convert = (attr) => {
    attr.ride ??= attr.itemControl === false ? "carousel" : true;
    attr = (0, mergeObject_js_1.mergeObject)({
        class: ["carousel", "slide", attr.fade ? "carousel-fade" : undefined],
        data: {
            "bs-interval": attr.interval,
            "bs-keyboard": attr.keyboard,
            "bs-pause": attr.pause,
            "bs-wrap": attr.wrap,
            "bs-ride": attr.ride,
            "bs-touch": attr.touch,
        },
        on: {
            build: attr.ride === "carousel"
                ? (e) => {
                    const target = e.target;
                    (0, _fn_js_1.init)(target);
                }
                : undefined,
        },
    }, attr);
    if (attr.item && !attr.elem) {
        attr.id ??= (0, uuid_js_1.UUID)();
        attr.elem = [];
        //indicators
        if (attr.itemIndicator) {
            attr.elem.push(new indicators.container(attr.item.map((_i, ix) => {
                return new indicators.button({
                    target: `#${attr.id}`,
                    slide: ix,
                    active: ix === 0 ? true : undefined,
                });
            })));
        }
        //item
        attr.elem.push(new inner.container(attr.innerAttr ? attr.innerAttr : {}, attr.item.map((i, ix) => {
            return new inner.item.container({
                interval: i.interval,
                active: ix === 0 ? true : undefined,
            }, [
                new inner.item.img({
                    src: i.src,
                }),
                i.caption ? new inner.item.caption(i.caption) : "",
            ]);
        })));
        //control
        if (attr.itemControl) {
            attr.elem.push(new inner.control.prev({
                target: `#${attr.id}`,
            }));
            attr.elem.push(new inner.control.next({
                target: `#${attr.id}`,
            }));
        }
    }
    delete attr.fade;
    delete attr.ride;
    delete attr.touch;
    delete attr.interval;
    delete attr.keyboard;
    delete attr.pause;
    delete attr.wrap;
    delete attr.innerAttr;
    delete attr.item;
    delete attr.itemControl;
    delete attr.itemIndicator;
    return attr;
};
class container extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.container = container;
const Container = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(container, AttrOrElem, Elem);
exports.Container = Container;
