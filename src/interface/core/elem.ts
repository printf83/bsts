import { strHtml, tag } from "../../core/tag.js";

export type elem = number | string | tag | strHtml | (number | string | tag | strHtml)[];
