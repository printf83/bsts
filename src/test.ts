import { tag } from "./core/base/base.interface.js";
import { core } from "./index.js";

console.log(core.UUID());
console.log(core.UUID());

let body = document.getElementsByTagName("body")[0] as HTMLElement;
core.appendChild(body, new tag({
    tag: "h1", bgColor: "primary", textColor: "secondary", elem: [
        new tag({ tag: "span", elem: "hello world 1", id: "test" }),
        new tag({tag:"span",elem:"hello world 2", bgColor:"danger"})
    ]
}));
