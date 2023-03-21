import { addClassIntoElement } from "../fn/addClassIntoElement.js";
export const attachClass = (key, elem, attr) => {
    if (key === "class") {
        if (attr && typeof attr.class !== "undefined") {
            elem = addClassIntoElement(elem, attr.class);
            delete attr.class;
        }
    }
    return { attr, elem };
};
