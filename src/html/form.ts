import { tagConsArg, IElem, tag } from "../core/tag.js";
import { form as Form } from "../interface/html/form.js";

export class form extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Form);
	constructor(attr: Form, elem: IElem);
	constructor(...arg: any[]) {
		super("form", tagConsArg<Form>("elem", arg));
	}
}
