import { span } from "../html/span.js";
import { rndBetween } from "./rndBetween.js";
export const placeholder = (min, max, minCol, maxCol) => {
    minCol ??= 1;
    maxCol ??= 4;
    let aR = Array(rndBetween(min, max)).fill("");
    return aR.map((i) => new span({
        loadingPlaceholder: true,
        marginEnd: 1,
        col: rndBetween(minCol, maxCol),
    }, ""));
};
