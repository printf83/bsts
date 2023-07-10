const CONVERTHASHTOVOID = true;
export const attachHref = (key, elem, attr) => {
    let changed = false;
    if (key === "href") {
        if (attr && typeof attr.href !== "undefined") {
            let i = Array.isArray(attr.href) ? attr.href.join(" ") : attr.href;
            if (CONVERTHASHTOVOID) {
                if (i === "#") {
                    elem.setAttribute("rel", "nofollow");
                    elem.setAttribute("href", "javascript:void(0);");
                }
                else {
                    elem.setAttribute("href", i);
                }
            }
            else {
                elem.setAttribute("href", i);
            }
            // delete attr.href;
            changed = true;
        }
    }
    return { attr, elem, changed };
};
