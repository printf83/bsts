export declare class ElementWithAbortController extends HTMLElement {
    AbortController?: AbortController | undefined;
    constructor(AbortController?: AbortController | undefined);
}
export declare const addEvent: (name: string, elem: string | Element | ElementWithAbortController, fn: EventListener) => void;
export declare const removeEvent: (elem: string | Element | ElementWithAbortController) => void;
