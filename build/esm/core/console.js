import { elemInfo } from "./elemInfo.js";
const DEBUG = false;
export const bstsConsole = {
    log: (...data) => {
        if (DEBUG)
            console.log(...data);
    },
    warn: (...data) => {
        console.warn(...data);
    },
    error: (...data) => {
        console.error(...data);
    },
    info: (action, elem) => {
        if (DEBUG) {
            if (elem) {
                if (typeof elem === "string") {
                    console.log(action.replace("$1", elem));
                }
                else {
                    console.log(action.replace("$1", elemInfo(elem)));
                }
            }
            else {
                console.log(action.replace("$1", ""));
            }
        }
    },
};
