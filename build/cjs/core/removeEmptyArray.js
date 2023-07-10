"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmptyArray = void 0;
const removeEmptyArray = (arr) => {
    return arr.filter(Boolean);
};
exports.removeEmptyArray = removeEmptyArray;
