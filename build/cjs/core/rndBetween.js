"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rndBetween = void 0;
const rndBetween = (min, max) => {
    if (min === max) {
        return min;
    }
    if (max < min) {
        max = min + 1;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.rndBetween = rndBetween;
