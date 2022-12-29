import { isTypeOf } from './isTypeOf';
import { attachAttr } from '../base/index';
import { IBase } from './../base/base.interface';
import { isHTML } from './isHTML';
import { setting } from './setting';
import { removeChildElement } from './removeChildElement';
import { removeElement } from './removeElement';

export const build = (container:HTMLElement, arg:IBase|string|null|(IBase|string|null)[], append:boolean=true, pos:HTMLElement|null=null):HTMLElement => {
	if (arg) {
		arg = Array.isArray(arg) ? arg : [arg];

		if (arg.length > 0) {
			arg.forEach((h) => {
                if (h !== null) {
                    if (isTypeOf<IBase>(h)){
                        let e = (h as IBase);
                        let element = e.tag ? document.createElement(e.tag) : container;
                        element = attachAttr(element, e);

                        if (e.elem) {
                            e.elem = Array.isArray(e.elem) ? e.elem : [e.elem];
                            e.elem.forEach((i) => {
                                if (i !== null) {
                                    
                                    if (isTypeOf<IBase>(i)) {
                                        let f = (i as IBase);
                                        let t = build(element, i);
                                        element = t ? t : element;
                                    }
                                    else {
                                        let g = i as string;
                                        if (e.tag === "pre" && isHTML(g)) {
                                            element.insertAdjacentHTML("beforeend", g);
                                        }
                                        else if (Array.isArray(i)) {
                                            console.error(
                                                "i is array. This happen when you set elem: [[tag],tag]. It should be elem:[tag,tag]",
                                                i
                                            );
                                        }
                                        else {
                                            element.append(document.createTextNode(g));    
                                        }
                                            
                                    }
                                }
                            });
                        }

                        //add to data dom
                        e.dom = element;

                        if (pos) {
                            container.insertBefore(element,pos);
                        }
                        else {
                            if (append) {
                                container.append(element);
                            }
                            else {
                                container.prepend(element);
                            }
                        }
                    }
				}
			});
		}
    }
    
	return container;
}

export const appendChild = (container: HTMLElement, arg: IBase|string|null|(IBase | string | null)[]):HTMLElement => {
    if (setting.DEBUG) console.time("appendChild");
    container = build(container, arg, true);
	if (setting.DEBUG) console.timeEnd("appendChild");
	return container.lastChild as HTMLElement;
}

export const prependChild = (container: HTMLElement, arg: IBase|string|null|(IBase | string | null)[]):HTMLElement => {
	if (setting.DEBUG) console.time("prependChild");
    container = build(container, arg, false);
	if (setting.DEBUG) console.timeEnd("prependChild");
	return container.firstChild as HTMLElement;
}

export const replaceWith = (elem:HTMLElement, arg: IBase|string|null|(IBase | string | null)[]):HTMLElement => {
    if (setting.DEBUG) console.time("replaceWith");
    let parent = elem.parentNode as HTMLElement;
    parent = build(parent,arg,true,elem)
	removeElement(elem);
	if (setting.DEBUG) console.timeEnd("replaceWith");
	return parent;
}

export const replaceChild=(container:HTMLElement, arg: IBase|string|null|(IBase | string | null)[]):HTMLElement => {
    if (setting.DEBUG) console.time("replaceChild");
	removeChildElement(container);
	container = build(container, arg);
	if (setting.DEBUG) console.timeEnd("replaceChild");
	return container;
}

export const html = (arg: IBase|string|null|(IBase | string | null)[]):string => {
	let container = document.createElement("div") as HTMLElement;
	container = build(container, arg);
	let html = container.innerHTML;
	container = null;
	return html;
}