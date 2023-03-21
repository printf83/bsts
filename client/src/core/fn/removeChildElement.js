import { deleteEvent } from "./eventManager.js";
export const removeChildElement = (elem) => {
    while (elem.firstChild) {
        deleteEvent(elem.firstChild);
        elem.firstChild.remove();
    }
};
