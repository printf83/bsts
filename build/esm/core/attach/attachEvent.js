import { addEvent } from "../eventManager.js";
export const attachEvent = (key, elem, attr) => {
    let changed = false;
    if (key === "on") {
        if (attr && typeof attr.on !== "undefined") {
            let prop = Object.keys(attr.on);
            if (prop && prop.length > 0) {
                for (let x = 0; x < prop.length; x++) {
                    if (typeof attr.on[prop[x]] === "function") {
                        addEvent(prop[x], elem, attr.on[prop[x]]);
                    }
                }
            }
            // delete attr.on;
            changed = true;
        }
    }
    return { attr, elem, changed };
};
export const hasBuildAndDestroyEvent = (attr) => {
    let hasBuild = false;
    let hasDestroy = false;
    if (attr && typeof attr.on !== "undefined") {
        let prop = Object.keys(attr.on);
        if (prop && prop.length > 0) {
            hasDestroy = true;
            if (prop.indexOf("build") > -1) {
                hasBuild = true;
            }
        }
    }
    return { hasBuild, hasDestroy };
};
