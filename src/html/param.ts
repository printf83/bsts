import { tagConstructorNoElement, tag, ConstructorArgsNoElement } from "../core/tag.js";
import { param as Param } from "../interface/html/param.js";

export class param extends tag {
	constructor();
	constructor(attr: Param);
	constructor(...arg: ConstructorArgsNoElement<Param>) {
		super("param", tagConstructorNoElement<Param>(arg));
	}
}
