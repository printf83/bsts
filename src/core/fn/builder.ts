import { attachAttr } from '../base/index.js';
import { tag, isTag } from './../base/base.interface.js';
import { isHTML } from './isHTML.js';
import { setting } from './setting.js';
import { removeChildElement } from './removeChildElement.js';
import { removeElement } from './removeElement.js';

export const build = (container:HTMLElement, arg:tag|string|(tag|string)[], append:boolean=true, pos:HTMLElement|null=null):HTMLElement => {
	if (arg) {
		arg = Array.isArray(arg) ? arg : [arg];

		if (arg.length > 0) {
			arg.forEach((h) => {
                if (h !== null) {
                    if (isTag(h)){
                        let e = (h as tag);
                        let element = e.data.tag ? document.createElement(e.data.tag) : container;
                        element = attachAttr(element, e.data);

                        if (e.data.elem) {
                            e.data.elem = Array.isArray(e.data.elem) ? e.data.elem : [e.data.elem];
                            e.data.elem.forEach((i) => {
                                if (i !== null) {
                                    
                                    if (isTag(i)) {
                                        let t = build(element, (i as tag));
                                        element = t ? t : element;
                                    }
                                    else {
                                        let g = i as string;
                                        if (e.data.tag === "pre" && isHTML(g)) {
                                            element.insertAdjacentHTML("beforeend", g);
                                        }
                                        else if (Array.isArray(i)) {
                                            console.error(
                                                "i is array. This happen when you set elem: [[tag],tag]. It should be elem:[tag,tag]",
                                                i
                                            );
                                        }
                                        else {
                                            element.appendChild(document.createTextNode(g));    
                                        }
                                            
                                    }
                                }
                            });
                        }

                        //add to data dom
                        //e.dom = element;

                        if (pos) {
                            container.insertBefore(element,pos);
                        }
                        else {
                            if (e.data.tag) {
                                if (append) {
                                    container.appendChild(element);
                                }
                                else {
                                    container.appendChild(element);
                                }    
                            }
                        }
                    }
				}
			});
		}
    }
    
	return container;
}

export const appendChild = (container: HTMLElement, arg: tag|string|(tag | string)[]):HTMLElement => {
    if (setting.DEBUG) console.time("appendChild");
    container = build(container, arg, true);
	if (setting.DEBUG) console.timeEnd("appendChild");
	return container.lastChild as HTMLElement;
}

export const prependChild = (container: HTMLElement, arg: tag|string|(tag | string)[]):HTMLElement => {
	if (setting.DEBUG) console.time("prependChild");
    container = build(container, arg, false);
	if (setting.DEBUG) console.timeEnd("prependChild");
	return container.firstChild as HTMLElement;
}

export const replaceWith = (elem:HTMLElement, arg: tag|string|(tag | string)[]):HTMLElement => {
    if (setting.DEBUG) console.time("replaceWith");
    let parent = elem.parentNode as HTMLElement;
    parent = build(parent,arg,true,elem)
	removeElement(elem);
	if (setting.DEBUG) console.timeEnd("replaceWith");
	return parent;
}

export const replaceChild=(container:HTMLElement, arg: tag|string|(tag | string)[]):HTMLElement => {
    if (setting.DEBUG) console.time("replaceChild");
	removeChildElement(container);
	container = build(container, arg);
	if (setting.DEBUG) console.timeEnd("replaceChild");
	return container;
}

export const html = (arg: tag|string|(tag | string)[]):string => {
	let container = document.createElement("div") as HTMLElement;
	container = build(container, arg);
	let html = container.innerHTML;
	container = null;
	return html;
}