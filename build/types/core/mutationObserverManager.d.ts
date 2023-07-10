export declare class ElementWithMutationObserver extends HTMLElement {
    MutationObserver?: MutationObserver | undefined;
    constructor(MutationObserver?: MutationObserver | undefined);
}
export declare const disconnectMutationObserver: (elem: string | Element | ElementWithMutationObserver) => void;
export declare const observeMutationObserver: (elem: string | Element | ElementWithMutationObserver, callback: (mutation: MutationRecord[], observer: MutationObserver, arg?: any[]) => void, options?: MutationObserverInit, arg?: any[]) => void;
