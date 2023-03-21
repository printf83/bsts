import { bsConsNoElemArg } from "../../src/core/base/bootstrap.js";
import { div } from "../../src/html/div.js";
import { card } from "../../src/bootstrap/card/_index.js";
import { list } from "../../src/bootstrap/list/_index.js";
import { UUID } from "../../src/core/fn/uuid.js";
import { replaceChild } from "../../src/core/fn/builder.js";
import { preview } from "./preview.js";
import { small } from "../../src/html/small.js";
import { a } from "../../src/html/a.js";
import { icon } from "../../src/bootstrap/icon.js";
import { tooltip } from "../../src/bootstrap/tooltip.js";
import { span } from "../../src/html/span.js";
const getOutputHTML = (target) => {
    var _a;
    let html = (_a = target.closest(".example")) === null || _a === void 0 ? void 0 : _a.getElementsByClassName("example-output")[0].innerHTML;
    replaceChild(target, new preview({ type: "html" }, html ? html : ""));
    PR.prettyPrint();
};
function itemCodeCopy(e) {
    e.stopPropagation();
    e.preventDefault();
    return false;
}
const itemCode = (header, collapseable, title, elem, onshow) => {
    let id = UUID();
    let res = [];
    if (header) {
        res.push(new list.item({
            display: "flex",
            verticalAlign: "middle",
            justifyContent: "between",
            bgColor: "body-tertiary",
            data: {
                "bs-toggle": collapseable ? "collapse" : undefined,
                "bs-target": collapseable ? `#${id}` : undefined,
            },
            aria: {
                expended: collapseable ? "false" : undefined,
                controls: collapseable ? id : undefined,
            },
        }, [
            new span(new small({
                monospace: true,
                textTransform: "uppercase",
                textColor: "secondary",
            }, title)),
            !collapseable
                ? new tooltip({ content: "Copy to clipboard" }, new a({ href: "#", color: "secondary", on: { click: itemCodeCopy } }, icon.reg("clipboard")))
                : "",
        ]));
    }
    else {
        if (!collapseable) {
            if (!Array.isArray(elem)) {
                elem = [elem];
            }
            elem.unshift(new span({ position: "relative", float: "end" }, new tooltip({ content: "Copy to clipboard" }, new a({ href: "#", color: "secondary", on: { click: itemCodeCopy } }, icon.reg("clipboard")))));
        }
    }
    res.push(new list.item({
        bgColor: "body-tertiary",
        class: [collapseable ? "collapse" : undefined],
        id: collapseable ? id : undefined,
        data: { loaded: "false" },
        on: {
            "show.bs.collapse": onshow
                ? (e) => {
                    let target = e.target;
                    if (target.getAttribute("data-loaded") === "false") {
                        target.setAttribute("data-loaded", "true");
                        onshow(target);
                    }
                }
                : undefined,
        },
    }, elem));
    return res;
};
const itemOutput = (manager, str) => {
    if (manager) {
        return new list.item({ class: `example-output`, padding: 0, overflow: "scroll" }, str);
    }
    else {
        return new list.item({ class: `example-output`, padding: 4, overflow: "scroll", display: "flex", gap: 2 }, str);
    }
};
const convert = (attr) => {
    let id = UUID();
    attr.showOutput = attr.showOutput === undefined ? true : attr.showOutput;
    attr.showScript = attr.showScript === undefined ? true : attr.showScript;
    attr.showHTML = attr.showHTML === undefined ? true : attr.showHTML;
    attr.showManager = attr.showManager === undefined ? true : attr.showManager;
    let e = [];
    if (attr.output && attr.showOutput) {
        if (attr.manager) {
            e.push(itemOutput(true, attr.manager(attr.output())));
        }
        else {
            e.push(itemOutput(false, attr.output()));
        }
    }
    if (attr.output && attr.showOutput && attr.showHTML) {
        e.push(...itemCode(e.length > 0, true, "HTML", "Loading...", getOutputHTML));
    }
    if (attr.css) {
        e.push(...itemCode(e.length > 0, true, "CSS", new preview({ type: "css" }, attr.css)));
    }
    if (attr.extention) {
        let f = [];
        if (Array.isArray(attr.extention)) {
            f = attr.extention;
        }
        else {
            f = [attr.extention];
        }
        f.forEach((i) => {
            if (i && i.name && (i.output || i.strOutput)) {
                e.push(...itemCode(e.length > 0, true, i.name, i.strOutput ? i.strOutput : i.output.toString()));
            }
        });
    }
    if ((attr.output || attr.strOutput) && attr.showScript && (attr.manager || attr.strManager) && attr.showManager) {
        e.push(...itemCode(e.length > 0, true, "Manager", new preview({ type: attr.strManager ? "ts" : "js" }, attr.strManager ? attr.strManager : attr.manager.toString())));
    }
    if ((attr.output || attr.strOutput) && attr.showScript) {
        e.push(...itemCode(e.length > 0, false, "Source", new preview({ type: attr.strOutput ? "ts" : "js" }, attr.strOutput ? attr.strOutput : attr.output.toString())));
    }
    attr.elem = [new card.container({ id: id, class: "example" }, [new list.container({ flush: true }, e)])];
    delete attr.lib;
    delete attr.css;
    delete attr.extention;
    delete attr.manager;
    delete attr.strManager;
    delete attr.output;
    delete attr.strOutput;
    delete attr.showHTML;
    delete attr.showScript;
    delete attr.showOutput;
    return attr;
};
export class code extends div {
    constructor(...arg) {
        super(bsConsNoElemArg(convert, arg));
    }
}
