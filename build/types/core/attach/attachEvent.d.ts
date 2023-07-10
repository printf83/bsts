import { IAttr } from "../tag.js";
import { IAttachFn } from "./_index.js";
export declare const attachEvent: IAttachFn;
export declare const hasBuildAndDestroyEvent: (attr: IAttr) => {
    hasBuild: boolean;
    hasDestroy: boolean;
};
