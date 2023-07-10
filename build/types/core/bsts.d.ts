import { IAttachFn } from "./attach/_index.js";
export declare namespace bstsType {
    type ROTATE = 45 | 90 | 135 | 180 | 225 | 270 | 315;
    type REPEAT = 1 | 2 | 3 | 5 | 10 | "infinite";
    type COLOR = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    type BODYCOLOR = "body" | "body-secondary" | "body-tertiary";
    type OTHERCOLOR = "white" | "black";
    type BODYTEXTCOLOR = BODYCOLOR | OTHERCOLOR | "body-emphasis";
    export type rotate = ROTATE | `${ROTATE}`;
    export type flip = "horizontal" | "vertical" | "both";
    export type animate = "rotation" | "sidetoside" | "zoom-in" | "zoom-out" | "spin" | "pulse" | "shake" | "barrel-roll" | "floater" | "wiggle" | "pound" | "heartbeat" | "roller-right" | "roller-left" | "slide-down" | "slide-up" | "slide-left" | "slide-right" | "fade-in" | "fade-out" | "rotate-in-right" | "rotate-in-left" | "rotate-in" | "bounce-in";
    export type animateDuration = "250ms" | "400ms" | "500ms" | "800ms" | "1s" | "1500ms" | "2s" | "2500ms" | "3s" | "4s" | "5s";
    export type animateRepeat = REPEAT | `${REPEAT}` | "infinite";
    export type animateDirection = "normal" | "reverse" | "alternate" | "alternate-reverse" | "normal-reverse" | "alternate-reverse-normal";
    export type animateDelay = animateDuration;
    export type animateFill = "none" | "forwards" | "backwards" | "both" | "none-backward" | "both-foward-none";
    export type animateTiming = "ease" | "ease-in-out" | "linear" | "zoom" | "bounce";
    export type linkNormal = COLOR | BODYTEXTCOLOR | "link" | "transparent";
    export type linkBorder = linkNormal;
    export type linkHover = linkNormal;
    export type linkActive = linkNormal;
    export type linkActiveBg = linkNormal;
    export type linkActiveBorder = linkNormal;
    export type linkBg = linkNormal;
    export type linkHoverBg = linkNormal;
    export type linkHoverBorder = linkNormal;
    export {};
}
export interface ITransform {
    rotate?: bstsType.rotate;
    flip?: bstsType.flip;
}
export interface IAnimate {
    animate?: bstsType.animate;
    animateDuration?: bstsType.animateDuration;
    animateRepeat?: bstsType.animateRepeat;
    animateDirection?: bstsType.animateDirection;
    animateDelay?: bstsType.animateDelay;
    animateFill?: bstsType.animateFill;
    animateTiming?: bstsType.animateTiming;
}
export interface ILink {
    linkNormal?: bstsType.linkNormal;
    linkBorder?: bstsType.linkBorder;
    linkHover?: bstsType.linkHover;
    linkHoverBorder?: bstsType.linkHoverBorder;
    linkActive?: bstsType.linkActive;
    linkActiveBg?: bstsType.linkActiveBg;
    linkActiveBorder?: bstsType.linkActiveBorder;
    linkBg?: bstsType.linkBg;
    linkHoverBg?: bstsType.linkHoverBg;
}
export declare namespace attachBSTSClass {
    const attach: IAttachFn;
}
