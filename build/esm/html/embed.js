import { tag } from "../core/tag.js";
export class embed extends tag {
    constructor(...arg) {
        if (arg.length === 0) {
            super("embed");
        }
        else if (arg.length === 2) {
            super("embed", { type: arg[0], src: arg[1] });
        }
        else if (arg.length === 1) {
            super("embed", arg[0]);
        }
    }
}
export const Embed = (AttrOrType, Src) => {
    if (AttrOrType) {
        if (Src) {
            return new embed(AttrOrType, Src);
        }
        else {
            return new embed(AttrOrType);
        }
    }
    else {
        return new embed();
    }
};
