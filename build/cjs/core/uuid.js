"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = void 0;
const UUID = (format = "el-xxxxxxxxxxxx") => {
    return format.replace(/[xy]/g, (c) => {
        let r = (Math.random() * 16) | 0, v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
exports.UUID = UUID;
