"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.getOrCreateInstance = exports.getInstance = exports.dispose = exports.init = exports.item = exports.container = exports.tab = void 0;
const container_js_1 = require("./container.js");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return container_js_1.container; } });
const item_js_1 = require("./item.js");
Object.defineProperty(exports, "item", { enumerable: true, get: function () { return item_js_1.item; } });
const tab = __importStar(require("./tab/_index.js"));
exports.tab = tab;
const _fn_js_1 = require("./_fn.js");
Object.defineProperty(exports, "dispose", { enumerable: true, get: function () { return _fn_js_1.dispose; } });
Object.defineProperty(exports, "getInstance", { enumerable: true, get: function () { return _fn_js_1.getInstance; } });
Object.defineProperty(exports, "getOrCreateInstance", { enumerable: true, get: function () { return _fn_js_1.getOrCreateInstance; } });
Object.defineProperty(exports, "init", { enumerable: true, get: function () { return _fn_js_1.init; } });
Object.defineProperty(exports, "show", { enumerable: true, get: function () { return _fn_js_1.show; } });
