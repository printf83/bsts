export const setupEventListenerRemover = (name:string, elem:HTMLElement, fn:Function):void =>{
	
    if (typeof elem["detachEventListener"] === "undefined") {
		elem["detachEventListener"] = {};
	}
	elem["detachEventListener"][name] = fn;
}