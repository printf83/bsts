import { IAttr, IElem } from "../../../core/tag.js";

export interface ContainerItem {
	title: IElem;
	elem: IElem;
	show?: boolean;
}

export interface Container extends IAttr {
	flush?: boolean;
	alwaysOpen?: boolean;
	item?: ContainerItem | ContainerItem[];
}
