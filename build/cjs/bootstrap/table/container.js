"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const table_js_1 = require("../../html/table.js");
const tbody_js_1 = require("./tbody.js");
const tr_js_1 = require("./tr.js");
const td_js_1 = require("./td.js");
const div_js_1 = require("../../html/div.js");
const th_js_1 = require("../../html/th.js");
const thead_js_1 = require("./thead.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const convert = (attr) => {
    if (attr.item && !attr.elem) {
        attr.elem = [];
        if (attr.item.length > 1) {
            attr.elem.push(new thead_js_1.thead({
                elem: new tr_js_1.tr({
                    elem: attr.item[0].map((i) => {
                        return new th_js_1.th({ scope: "col" }, i);
                    }),
                }),
            }));
        }
        let responsiveHeader = [];
        if (attr.responsiveAttr) {
            if (attr.responsiveHeader) {
                responsiveHeader = attr.responsiveHeader;
            }
            else {
                if (attr.item.length >= 2 && attr.item[0].length === attr.item[1].length) {
                    responsiveHeader = attr.item[0].map((i) => i.toString());
                }
            }
        }
        if (attr.responsiveAttr && attr.item.length >= 2 && responsiveHeader.length === attr.item[1].length) {
            attr.elem.push(new tbody_js_1.tbody({
                divider: attr.item.length > 1,
                elem: attr.item.slice(attr.item.length > 1 ? 1 : 0).map((i) => {
                    return new tr_js_1.tr({
                        elem: i.map((j, jx) => {
                            return new td_js_1.td({
                                responsiveAttr: attr.responsiveAttr,
                                responsiveTitle: responsiveHeader[jx],
                            }, new div_js_1.div(j));
                        }),
                    });
                }),
            }));
        }
        else {
            attr.responsiveAttr = undefined;
            attr.elem.push(new tbody_js_1.tbody({
                divider: attr.item.length > 1,
                elem: attr.item.slice(attr.item.length > 1 ? 1 : 0).map((i) => {
                    return new tr_js_1.tr({
                        elem: i.map((j) => {
                            return new td_js_1.td(j);
                        }),
                    });
                }),
            }));
        }
    }
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [
        "table",
        attr.color ? `table-${attr.color}` : undefined,
        attr.striped ? (attr.striped === "row" ? "table-striped" : "table-striped-columns") : undefined,
        attr.hoverable ? "table-hover" : undefined,
        attr.bordered !== undefined ? (attr.bordered === true ? "table-bordered" : "table-borderless") : undefined,
        attr.small ? "table-sm" : undefined,
        attr.captionLocation === "top" ? "caption-top" : undefined,
    ]);
    if (attr.responsiveAttr || attr.responsiveCol || attr.responsiveColXs) {
        attr = (0, mergeObject_js_1.mergeObject)({
            data: { "bs-responsive-title": attr.responsiveAttr },
            style: {
                "--bs-responsive-columns": attr.responsiveCol,
                "--bs-responsive-columns-xs": attr.responsiveColXs,
            },
        }, attr);
    }
    delete attr.responsiveHeader;
    delete attr.responsiveAttr;
    delete attr.responsiveCol;
    delete attr.responsiveColXs;
    delete attr.color;
    delete attr.striped;
    delete attr.hoverable;
    delete attr.bordered;
    delete attr.small;
    delete attr.captionLocation;
    delete attr.item;
    return attr;
};
class container extends table_js_1.table {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.container = container;
const Container = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(container, AttrOrElem, Elem);
exports.Container = Container;
