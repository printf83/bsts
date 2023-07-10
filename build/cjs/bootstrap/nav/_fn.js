"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
const mergeObject_js_1 = require("../../core/mergeObject.js");
const uuid_js_1 = require("../../core/uuid.js");
const container_js_1 = require("./content/container.js");
const header_js_1 = require("../card/header.js");
const containerNav_js_1 = require("./header/containerNav.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
//only available as function
const Tab = (attr) => {
    if (attr.item) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.id ??= (0, uuid_js_1.UUID)();
        attr.type ??= "tab";
        attr.animation ??= true;
        let tAttr = Object.assign({}, attr);
        tAttr.class = (0, mergeClass_js_1.mergeClass)(tAttr.class, attr.card ? `card-header-${attr.type}s` : undefined);
        delete tAttr.card;
        delete tAttr.animation;
        delete tAttr.item;
        delete tAttr.attrContent;
        tAttr.item = attr.item.map((i, ix) => {
            return {
                active: i.active,
                disabled: i.disabled,
                id: `${attr.id}-tab-${ix}`,
                target: `#${attr.id}-content-${ix}`,
                controlfor: `#${attr.id}-content-${ix}`,
                toggle: "tab",
                elem: i.label,
            };
        });
        let THeader;
        THeader = new containerNav_js_1.containerNav(tAttr);
        let tAttrContent = (0, mergeObject_js_1.mergeObject)({
            id: `${attr.id}-content`,
            marginTop: attr.card || attr.vertical ? undefined : 3,
            class: attr.card ? "card-body" : undefined,
            item: attr.item.map((i, ix) => {
                return {
                    id: `${attr.id}-content-${ix}`,
                    role: "tabpanel",
                    labelledby: `${attr.id}-tab-${ix}`,
                    active: i.active,
                    animation: attr.animation,
                    elem: i.elem,
                };
            }),
        }, attr.attrContent ? attr.attrContent : {});
        let TContent = new container_js_1.container(tAttrContent);
        if (attr.card) {
            return [new header_js_1.header(THeader), TContent];
        }
        else {
            return [THeader, TContent];
        }
    }
    return "";
};
exports.Tab = Tab;
