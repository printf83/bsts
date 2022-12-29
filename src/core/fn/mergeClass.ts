export const mergeClass = (existingClass:string|string[]|null|undefined, newClass:string|string[]|null|undefined)=> {
	if (existingClass) {
        if (newClass) {
            if (Array.isArray(existingClass)) {
                if (Array.isArray(newClass)) {
                    return [...existingClass, ...newClass];
                }
                else {
                    return [...existingClass, newClass];                 
                }    
            }
            else {
                if (Array.isArray(newClass)) {
                    return [existingClass, ...newClass];
                }
                else {
                    return [existingClass, newClass];
                }
            }
        }
        else {
            return existingClass;
        }
    }
    else {
        if (newClass) {
            return newClass;
        }
        else {
            return null;
        }
    }
    
}