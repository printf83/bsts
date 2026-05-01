import { tagConstructor, tag, ConstructorArgs } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { form as Form } from "../interface/html/form.js";

export class form extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Form);
	constructor(attr: Form, elem: elem | elem[]);
	constructor(...arg: ConstructorArgs<Form>) {
		super("form", tagConstructor<Form>("elem", arg));
	}
}
