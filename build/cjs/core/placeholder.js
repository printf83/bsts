"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeholder = void 0;
const span_js_1 = require("../html/span.js");
const rndBetween_js_1 = require("./rndBetween.js");
const placeholder = (min, max, minCol, maxCol) => {
    minCol ??= 1;
    maxCol ??= 4;
    let aR = Array((0, rndBetween_js_1.rndBetween)(min, max)).fill("");
    return aR.map((i) => new span_js_1.span({
        loadingPlaceholder: true,
        marginEnd: 1,
        col: (0, rndBetween_js_1.rndBetween)(minCol, maxCol),
    }, ""));
};
exports.placeholder = placeholder;
