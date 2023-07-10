"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = exports.show = exports.isShown = exports.dispose = exports.hide = exports.getOrCreateInstance = exports.getInstance = exports.init = void 0;
const builder_js_1 = require("../../core/builder.js");
const eventManager_js_1 = require("../../core/eventManager.js");
const uuid_js_1 = require("../../core/uuid.js");
const btnclose_js_1 = require("./btnclose.js");
const body_js_1 = require("./body.js");
const header_js_1 = require("./header.js");
const timer_js_1 = require("../timer.js");
const container_js_1 = require("./container.js");
const item_js_1 = require("./item.js");
const div_js_1 = require("../../html/div.js");
const strong_js_1 = require("../../html/strong.js");
const tag_js_1 = require("../../core/tag.js");
const console_js_1 = require("../../core/console.js");
const bootstrap_1 = require("bootstrap");
const init = (elem, options) => {
    return (0, exports.getOrCreateInstance)(elem, options);
};
exports.init = init;
const getInstance = (elem) => {
    return bootstrap_1.Toast.getInstance(elem);
};
exports.getInstance = getInstance;
const getOrCreateInstance = (elem, options) => {
    (0, eventManager_js_1.addEvent)("destroy", elem, (i) => {
        const target = i.target;
        const m = (0, exports.getInstance)(target);
        if (m) {
            console_js_1.bstsConsole.info(`Dispose bootstrap toast from $1`, target);
            m.hide();
            m.dispose();
        }
    });
    console_js_1.bstsConsole.info(`Initialize bootstrap toast to $1`, elem);
    return bootstrap_1.Toast.getOrCreateInstance(elem, options);
};
exports.getOrCreateInstance = getOrCreateInstance;
const hide = (elem) => {
    (0, exports.getOrCreateInstance)(elem)?.hide();
};
exports.hide = hide;
const dispose = (elem) => {
    (0, exports.getInstance)(elem)?.dispose();
};
exports.dispose = dispose;
const isShown = (elem) => {
    let t = (0, exports.getOrCreateInstance)(elem);
    if (t) {
        return t.isShown();
    }
    else {
        return false;
    }
};
exports.isShown = isShown;
const show = (itemOrElem, placement) => {
    if (!(0, tag_js_1.isTag)(itemOrElem)) {
        (0, exports.getOrCreateInstance)(itemOrElem)?.show();
    }
    else {
        placement ??= "top-end";
        //make container
        let containerClassName = ".toast-container.top-0.start-0:not(.debug)";
        switch (placement) {
            case "top-start":
                containerClassName = ".toast-container.top-0.start-0:not(.debug)";
                break;
            case "top-center":
                containerClassName = ".toast-container.top-0.start-50.translate-middle-x:not(.debug)";
                break;
            case "top-end":
                containerClassName = ".toast-container.top-0.end-0:not(.debug)";
                break;
            case "middle-start":
                containerClassName = ".toast-container.top-50.start-0.translate-middle-y:not(.debug)";
                break;
            case "middle-center":
                containerClassName = ".toast-container.top-50.start-50.translate-middle:not(.debug)";
                break;
            case "middle-end":
                containerClassName = ".toast-container.top-50.end-0.translate-middle-y:not(.debug)";
                break;
            case "bottom-start":
                containerClassName = ".toast-container.bottom-0.start-0:not(.debug)";
                break;
            case "bottom-center":
                containerClassName = ".toast-container.bottom-0.start-50.translate-middle-x:not(.debug)";
                break;
            case "bottom-end":
                containerClassName = ".toast-container.bottom-0.end-0:not(.debug)";
                break;
            default:
                containerClassName = ".toast-container.top-0.start-0:not(.debug)";
        }
        let containerDOM = document.querySelector(containerClassName);
        if (!containerDOM) {
            (0, builder_js_1.appendChild)(document.body, new container_js_1.container({ placement: placement }));
            containerDOM = document.querySelector(containerClassName);
        }
        if (containerDOM) {
            if (!itemOrElem.attr) {
                itemOrElem.attr = {};
            }
            itemOrElem.attr.id ??= (0, uuid_js_1.UUID)();
            (0, builder_js_1.appendChild)(containerDOM, itemOrElem);
            let tst = document.getElementById(itemOrElem.attr.id);
            if (tst) {
                (0, eventManager_js_1.addEvent)("hidden.bs.toast", tst, (e) => {
                    (0, builder_js_1.removeElement)(e.target);
                });
                (0, exports.show)(tst);
            }
        }
    }
};
exports.show = show;
const Create = (attr) => {
    let defaultBtnCloseWhite = false;
    switch (attr.color) {
        case "dark":
        case "primary":
        case "secondary":
        case "success":
        case "danger":
            defaultBtnCloseWhite = true;
            break;
    }
    attr.delay ??= 5000;
    attr.atomic ??= true;
    attr.live ??= "assertive";
    attr.btnclosewhite ??= defaultBtnCloseWhite;
    if (attr.title) {
        return new item_js_1.item({
            animation: attr.animation,
            live: attr.live,
            atomic: attr.atomic,
            delay: attr.delay,
            textBgColor: attr.color,
            border: false,
        }, [
            new header_js_1.header([
                new div_js_1.div({ marginEnd: "auto" }, new strong_js_1.strong(attr.title)),
                attr.delay > 5000 ? new timer_js_1.timer() : "",
                new btnclose_js_1.btnclose(),
            ]),
            new body_js_1.body(attr.elem),
        ]);
    }
    else {
        return new item_js_1.item({
            animation: attr.animation,
            live: attr.live,
            atomic: attr.atomic,
            border: false,
            delay: attr.delay,
            textBgColor: attr.color,
        }, new div_js_1.div({ display: "flex" }, [
            new body_js_1.body(attr.elem),
            new btnclose_js_1.btnclose({
                marginEnd: 2,
                margin: "auto",
                white: attr.btnclosewhite,
            }),
        ]));
    }
};
exports.Create = Create;
