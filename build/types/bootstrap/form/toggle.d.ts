import { Input, input as TInput } from "../input.js";
import { Label, label } from "../label.js";
export interface Toggle extends Omit<Input, "container"> {
    type?: "checkbox" | "radio";
    container?: Label;
}
export declare const Toggle: (attr: Toggle) => (TInput | label)[];
