"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle = exports.show = exports.hide = exports.getOrCreateInstance = exports.getInstance = exports.dispose = exports.init = exports.title = exports.header = exports.container = exports.btnclose = exports.body = void 0;
const body_js_1 = require("./body.js");
Object.defineProperty(exports, "body", { enumerable: true, get: function () { return body_js_1.Body; } });
const btnclose_js_1 = require("./btnclose.js");
Object.defineProperty(exports, "btnclose", { enumerable: true, get: function () { return btnclose_js_1.Btnclose; } });
const container_js_1 = require("./container.js");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return container_js_1.Container; } });
const header_js_1 = require("./header.js");
Object.defineProperty(exports, "header", { enumerable: true, get: function () { return header_js_1.Header; } });
const title_js_1 = require("./title.js");
Object.defineProperty(exports, "title", { enumerable: true, get: function () { return title_js_1.Title; } });
const _fn_js_1 = require("./_fn.js");
Object.defineProperty(exports, "dispose", { enumerable: true, get: function () { return _fn_js_1.dispose; } });
Object.defineProperty(exports, "getInstance", { enumerable: true, get: function () { return _fn_js_1.getInstance; } });
Object.defineProperty(exports, "getOrCreateInstance", { enumerable: true, get: function () { return _fn_js_1.getOrCreateInstance; } });
Object.defineProperty(exports, "hide", { enumerable: true, get: function () { return _fn_js_1.hide; } });
Object.defineProperty(exports, "init", { enumerable: true, get: function () { return _fn_js_1.init; } });
Object.defineProperty(exports, "show", { enumerable: true, get: function () { return _fn_js_1.show; } });
Object.defineProperty(exports, "toggle", { enumerable: true, get: function () { return _fn_js_1.toggle; } });
