export interface IIcon {
	icon: string;
	type: string;
	color: string;
}
const _baseIcon = {
	i: { icon: "info-circle", type: "fas", color: "primary" },
	"!": { icon: "exclamation-triangle", type: "fas", color: "warning" },
	"!!": { icon: "exclamation-triangle", type: "fas", color: "danger" },
	"?": { icon: "question-circle", type: "fas", color: "success" },
	"/": { icon: "check-circle", type: "fas", color: "success" },
	x: { icon: "times-circle", type: "fas", color: "danger" },
	"-": { icon: "minus-circle", type: "fas", color: "danger" },
};

export const getBaseIcon = (icon: string): IIcon | null => {
	if (_baseIcon.hasOwnProperty(icon)) {
		return _baseIcon[icon];
	}
	return null;
};
