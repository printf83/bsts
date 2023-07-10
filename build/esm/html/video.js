import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class video extends tag {
    constructor(...arg) {
        super("video", tagConsArg("elem", arg));
    }
}
export const Video = (AttrOrElem, Elem) => genTagClass(video, AttrOrElem, Elem);
