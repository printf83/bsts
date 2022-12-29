import { mergeClass } from "./mergeClass";
import { mergeStyle } from "./mergeStyle";

export const mergeObject = (existingObject:object|null|undefined, newObject:object|null|undefined) => {
    
    if (existingObject) {
        if (newObject) {
            let res = {};
            Object.keys(existingObject).forEach((i) => {
                if (newObject.hasOwnProperty(i)) {
                    if (i === "class") {
                        res[i] = mergeClass(existingObject[i], newObject[i]);
                    } else if (i === "style") {
                        res[i] = mergeStyle(existingObject[i], newObject[i]);
                    } else {
                        res[i] = newObject[i]; //used newObject insted
                    }
                } else {
                    res[i] = existingObject[i];
                }
            });

            Object.keys(newObject).forEach((i) => {
                if (!existingObject.hasOwnProperty(i)) {
                    if (newObject[i] !== null && newObject[i] !== undefined) {
                        res[i] = newObject[i];
                    }
                }
            });

            return res;
        }
        else {
            return existingObject;
        }
    }
    else {
        if (newObject) {
            return newObject;
        }
        else {
            return null;
        }
    }
    
	
}