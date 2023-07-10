import { Carousel as BSCarousel } from "bootstrap";
export declare const init: (elem: Element | string, options?: Partial<BSCarousel.Options>) => BSCarousel;
export declare const getInstance: (elem: Element | string) => BSCarousel | null;
export declare const getOrCreateInstance: (elem: Element | string, options?: Partial<BSCarousel.Options>) => BSCarousel;
export declare const cycle: (elem: Element | string) => void;
export declare const next: (elem: Element | string) => void;
export declare const nextWhenVisible: (elem: Element | string) => void;
export declare const pause: (elem: Element | string, pauseType?: boolean | "hover") => void;
export declare const prev: (elem: Element | string) => void;
export declare const to: (elem: Element | string, index: number) => void;
export declare const dispose: (elem: Element | string) => void;
