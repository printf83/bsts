import { keyOfType } from "./keyOfType.js";
export interface IIcon {
	icon: string;
	type: string;
	color: string;
}

export interface IBaseIcon {
	[key: string]: IIcon;
}

let db: IBaseIcon = {
	i: { icon: "info-circle", type: "fas", color: "primary" },
	"!": { icon: "exclamation-triangle", type: "fas", color: "warning" },
	"!!": { icon: "exclamation-triangle", type: "fas", color: "danger" },
	"?": { icon: "question-circle", type: "fas", color: "success" },
	"/": { icon: "check-circle", type: "fas", color: "success" },
	x: { icon: "times-circle", type: "fas", color: "danger" },
	"-": { icon: "minus-circle", type: "fas", color: "danger" },
};

export const getBaseIcon = (icon: string): IIcon | null => {
	// if (db.hasOwnProperty(icon)) {
	if (icon in db) {
		let k = keyOfType(icon, db);
		return db[k];
	}
	return null;
};

export const setBaseIcon = (baseIcon: IBaseIcon) => {
	db = baseIcon;
};
