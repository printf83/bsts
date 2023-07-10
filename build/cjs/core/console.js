"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bstsConsole = void 0;
const elemInfo_js_1 = require("./elemInfo.js");
const DEBUG = false;
exports.bstsConsole = {
    log: (...data) => {
        if (DEBUG)
            console.log(...data);
    },
    warn: (...data) => {
        console.warn(...data);
    },
    error: (...data) => {
        console.error(...data);
    },
    info: (action, elem) => {
        if (DEBUG) {
            if (elem) {
                if (typeof elem === "string") {
                    console.log(action.replace("$1", elem));
                }
                else {
                    console.log(action.replace("$1", (0, elemInfo_js_1.elemInfo)(elem)));
                }
            }
            else {
                console.log(action.replace("$1", ""));
            }
        }
    },
};
