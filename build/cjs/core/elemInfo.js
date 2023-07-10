"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elemInfo = void 0;
function elemInfo(elem) {
    const e = elem;
    let a1 = e.localName;
    let a2 = e.id ? `#${e.id}` : "";
    let a3 = !a2 ? (e.classList && e.classList.length > 0 ? "." + [].slice.apply(e.classList).join(".") : "") : "";
    let a4 = !a2 && !a3 ? ("name" in e ? `[name='${e.name}']` : "") : "";
    let a5 = !a2 && !a3 && !a4 ? (e.innerText ? ` [${e.innerText}]` : "") : "";
    return `${a1}${a2}${a3}${a4}${a5}`;
}
exports.elemInfo = elemInfo;
