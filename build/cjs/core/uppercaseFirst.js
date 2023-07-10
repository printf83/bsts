"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uppercaseFirst = void 0;
const uppercaseFirst = (str) => {
    if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    else {
        return str;
    }
};
exports.uppercaseFirst = uppercaseFirst;
