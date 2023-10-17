import { bootstrapType } from "../../core/bootstrap.js";
import { Label as ILabel } from "../../html/label.js";
import { Icon } from "./icon.js";
import { icon } from "../../bootstrap/icon.js";
import { Button } from "./button.js";

export type LabelDisplay = bootstrapType.display | bootstrapType.display[];

export interface Label extends ILabel, Omit<Button, "role"> {
	icon?: string | Icon | icon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: LabelDisplay;
	labelDisplay?: LabelDisplay;
	stretched?: boolean;
}
