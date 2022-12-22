export const deleteEventListener = (name:string, elem:HTMLElement, callback:Function) => {
    if (typeof elem["detachEventListener"] === "object") {
        
        elem["detachEventListener"][name] = null;
        delete elem["detachEventListener"][name];    
    }
    
	callback();
}