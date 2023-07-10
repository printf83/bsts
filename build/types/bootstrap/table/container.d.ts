import { IAttr, IElem, tag, strHtml } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { table } from "../../html/table.js";
export interface Container extends IAttr {
    color?: bootstrapType.color;
    striped?: "row" | "col";
    hoverable?: boolean;
    bordered?: boolean;
    small?: true;
    captionLocation?: "top" | "bottom";
    responsiveHeader?: string[];
    responsiveAttr?: string;
    responsiveCol?: string;
    responsiveColXs?: string;
    item?: (string | tag | strHtml | (string | tag | strHtml)[])[][];
}
export declare class container extends table {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
