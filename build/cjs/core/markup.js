"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markup = void 0;
const a_js_1 = require("../html/a.js");
const strong_js_1 = require("../html/strong.js");
const b_js_1 = require("../html/b.js");
const code_js_1 = require("../html/code.js");
const br_js_1 = require("../html/br.js");
const hr_js_1 = require("../html/hr.js");
const i_js_1 = require("../html/i.js");
const kbd_js_1 = require("../html/kbd.js");
const span_js_1 = require("../html/span.js");
const u_js_1 = require("../html/u.js");
const del_js_1 = require("../html/del.js");
const mark_js_1 = require("../html/mark.js");
const markupCode = (k, str) => {
    if (k.match(/^[buickdms]*$/gm)) {
        let res = null;
        let ks = k.split("");
        let ksl = ks.length - 1;
        str = escapeMarkup(str);
        ks.forEach((x, ix) => {
            switch (x) {
                case "d":
                    if (res === null) {
                        res = new del_js_1.del(ix === ksl ? str : "");
                    }
                    else {
                        res.elem = new del_js_1.del(ix === ksl ? str : "");
                    }
                    break;
                case "m":
                    if (res === null) {
                        res = new mark_js_1.mark(ix === ksl ? str : "");
                    }
                    else {
                        res.elem = new mark_js_1.mark(ix === ksl ? str : "");
                    }
                    break;
                case "s":
                    if (res === null) {
                        res = new strong_js_1.strong(ix === ksl ? str : "");
                    }
                    else {
                        res.elem = new strong_js_1.strong(ix === ksl ? str : "");
                    }
                    break;
                case "b":
                    if (res === null) {
                        res = new b_js_1.b(ix === ksl ? str : "");
                    }
                    else {
                        res.elem = new b_js_1.b(ix === ksl ? str : "");
                    }
                    break;
                case "u":
                    if (res === null) {
                        res = new u_js_1.u(ix === ksl ? str : "");
                    }
                    else {
                        res.elem = new u_js_1.u(ix === ksl ? str : "");
                    }
                    break;
                case "i":
                    if (res === null) {
                        res = new i_js_1.i(ix === ksl ? str : "");
                    }
                    else {
                        res.elem = new i_js_1.i(ix === ksl ? str : "");
                    }
                    break;
                case "k":
                    if (res === null) {
                        res = new kbd_js_1.kbd(ix === ksl ? str : "");
                    }
                    else {
                        res.elem = new kbd_js_1.kbd(ix === ksl ? str : "");
                    }
                    break;
                case "c":
                    if (res === null) {
                        res = new code_js_1.code(ix === ksl ? str : "");
                    }
                    else {
                        res.elem = new code_js_1.code(ix === ksl ? str : "");
                    }
                    break;
                default:
                    if (res === null) {
                        res = new span_js_1.span(ix === ksl ? str : "");
                    }
                    else {
                        res.elem = new span_js_1.span(ix === ksl ? str : "");
                    }
            }
        });
        return res;
    }
    return null;
};
const escapeMarkup = (str) => {
    return str.replace(/\/{\//g, "{").replace(/\/}\//g, "}").replace(/\/:\//g, ":");
};
const markup = (str) => {
    let reg = /\{\{(.*?)}\}/gm;
    if (str.match(reg)) {
        let matchResult;
        let result = [];
        let lastIndex = 0;
        while ((matchResult = reg.exec(str)) !== null) {
            result.push(str.slice(lastIndex, matchResult.index));
            result.push(str.slice(matchResult.index, reg.lastIndex));
            lastIndex = reg.lastIndex;
        }
        result.push(str.slice(lastIndex));
        return result.map((s) => {
            if (s.startsWith("{{")) {
                let c = s.indexOf("::");
                if (c > 0) {
                    let d = s.slice(2, c);
                    let e = s.slice(c + 2, s.length - 2);
                    let m = markupCode(d, e);
                    if (m) {
                        return m;
                    }
                    else {
                        if (d.startsWith("nav:")) {
                            return new a_js_1.a({
                                href: "#",
                                on: {
                                    click: () => {
                                        document.dispatchEvent(new CustomEvent("bs.navigate", { detail: d.slice(4) }));
                                    },
                                },
                            }, escapeMarkup(e));
                        }
                        else {
                            return new a_js_1.a({ href: d, target: "_blank" }, escapeMarkup(e));
                        }
                    }
                }
                else {
                    switch (s) {
                        case "{{br}}":
                            return new br_js_1.br();
                        case "{{hr}}":
                            return new hr_js_1.hr();
                        default:
                            return new code_js_1.code(escapeMarkup(s.slice(2, -2)));
                    }
                }
            }
            else {
                return s;
            }
        });
    }
    else {
        return str;
    }
};
exports.markup = markup;
