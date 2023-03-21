import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { i } from "../html/i.js";
import { span } from "../html/span.js";
const convert = (attr) => {
    attr = mergeObject({
        class: [
            attr.type ? attr.type : attr.icon ? "fas" : undefined,
            attr.icon ? `fa-${attr.icon}` : undefined,
            attr.weight ? `fa-${attr.weight}` : undefined,
            attr.fixwidth !== false ? "fa-fw" : undefined,
            attr.spin ? "fa-spin" : undefined,
            attr.bounce ? "fa-bounce" : undefined,
            attr.flip ? "fa-flip" : undefined,
            attr.shake ? "fa-shake" : undefined,
            attr.inverse ? "fa-inverse" : undefined,
            !attr.beat && attr.fade ? "fa-fade" : undefined,
            attr.beat && !attr.fade ? "fa-beat" : undefined,
            attr.beat && attr.fade ? "fa-beat-fade" : undefined,
            attr.rotate
                ? typeof attr.rotate === "number"
                    ? `fa-rotate-${attr.rotate.toString()}`
                    : `fa-flip-${attr.rotate.toString()}`
                : undefined,
            attr.stack
                ? typeof attr.stack === "number"
                    ? `fa-stack-${attr.stack.toString()}x`
                    : "fa-stack"
                : undefined,
        ],
        textColor: attr.color,
    }, attr);
    delete attr.icon;
    delete attr.type;
    delete attr.color;
    delete attr.weight;
    delete attr.fixwidth;
    delete attr.fade;
    delete attr.bounce;
    delete attr.flip;
    delete attr.spin;
    delete attr.shake;
    delete attr.rotate;
    delete attr.inverse;
    delete attr.stack;
    return {
        class: "fa-svg-container",
        elem: new i(attr),
        data: { class: attr.class ? (Array.isArray(attr.class) ? attr.class.join(" ") : attr.class) : undefined },
    };
};
const genStaticIcon = (t, i, a) => {
    if (a) {
        delete a.type;
        delete a.icon;
        return new icon(mergeObject({ type: t, icon: i }, a));
    }
    else {
        return new icon({ type: t, icon: i });
    }
};
class icon extends span {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}
icon.brand = (i, attr) => genStaticIcon("fab", i, attr);
icon.solid = (i, attr) => genStaticIcon("fas", i, attr);
icon.duo = (i, attr) => genStaticIcon("fad", i, attr);
icon.light = (i, attr) => genStaticIcon("fal", i, attr);
icon.reg = (i, attr) => genStaticIcon("far", i, attr);
export { icon };
