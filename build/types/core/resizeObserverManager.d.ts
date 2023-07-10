export declare class ElementWithResizeObserver extends HTMLElement {
    ResizeObserver?: ResizeObserver | undefined;
    constructor(ResizeObserver?: ResizeObserver | undefined);
}
export declare const disconnectResizeObserver: (elem: string | Element | ElementWithResizeObserver) => void;
export declare const unobserveResizeObserver: (elem: string | Element | ElementWithResizeObserver) => void;
export declare const observeResizeObserver: (elem: string | Element | ElementWithResizeObserver, callback: (entry: ResizeObserverEntry[], observer: ResizeObserver, arg?: any[]) => void, options?: ResizeObserverOptions, arg?: any[]) => void;
