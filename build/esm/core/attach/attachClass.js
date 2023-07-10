import { addClassIntoElement } from "../addClassIntoElement.js";
export const attachClass = (key, elem, attr) => {
    let changed = false;
    if (key === "class") {
        if (attr && typeof attr.class !== "undefined") {
            elem = addClassIntoElement(elem, attr.class);
            // delete attr.class;
            changed = true;
        }
    }
    return { attr, elem, changed };
};
