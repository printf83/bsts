"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camel2Dash = void 0;
const camel2Dash = (value) => {
    return value.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
};
exports.camel2Dash = camel2Dash;
