import { deleteEvent } from "./eventManager.js";
export const removeElement = (elem) => {
    deleteEvent(elem);
    elem.remove();
};
