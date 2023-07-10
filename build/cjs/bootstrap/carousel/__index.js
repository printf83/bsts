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
exports.to = exports.prev = exports.pause = exports.nextWhenVisible = exports.next = exports.dispose = exports.cycle = exports.getOrCreateInstance = exports.getInstance = exports.init = exports.inner = exports.indicators = exports.container = void 0;
const container_js_1 = require("./container.js");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return container_js_1.Container; } });
const Indicators = __importStar(require("./indicators/__index.js"));
exports.indicators = Indicators;
const Inner = __importStar(require("./inner/__index.js"));
exports.inner = Inner;
const _fn_js_1 = require("./_fn.js");
Object.defineProperty(exports, "init", { enumerable: true, get: function () { return _fn_js_1.init; } });
Object.defineProperty(exports, "getInstance", { enumerable: true, get: function () { return _fn_js_1.getInstance; } });
Object.defineProperty(exports, "getOrCreateInstance", { enumerable: true, get: function () { return _fn_js_1.getOrCreateInstance; } });
Object.defineProperty(exports, "cycle", { enumerable: true, get: function () { return _fn_js_1.cycle; } });
Object.defineProperty(exports, "dispose", { enumerable: true, get: function () { return _fn_js_1.dispose; } });
Object.defineProperty(exports, "next", { enumerable: true, get: function () { return _fn_js_1.next; } });
Object.defineProperty(exports, "nextWhenVisible", { enumerable: true, get: function () { return _fn_js_1.nextWhenVisible; } });
Object.defineProperty(exports, "pause", { enumerable: true, get: function () { return _fn_js_1.pause; } });
Object.defineProperty(exports, "prev", { enumerable: true, get: function () { return _fn_js_1.prev; } });
Object.defineProperty(exports, "to", { enumerable: true, get: function () { return _fn_js_1.to; } });
