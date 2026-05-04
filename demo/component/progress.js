import { core, b, h } from "@printf83/bsts";

export const progress = () => {
	return new b.progress.container({
		value: 25,
	});
};

export const progressColor = () => {
	return ["success", "info", "warning", "danger"].map((i, ix) => {
		const val = [25, 50, 75, 100][ix];
		return new b.progress.container(
			{
				label: `${core.uppercaseFirst(i)} example`,
				value: val,
				min: 0,
				max: 100,
			},
			new b.progress.bar({
				color: i,
				style: { width: `${val}%` },
			})
		);
	});
};

export const progressMultibar = () => {
	return new b.progress.stacked([
		new b.progress.container({
			label: "Segment one",
			value: 15,
			min: 0,
			max: 100,
			stacked: true,
		}),
		new b.progress.container({
			label: "Segment two",
			value: 30,
			min: 0,
			max: 100,
			stacked: true,
			color: "success",
		}),
		new b.progress.container({
			label: "Segment three",
			value: 20,
			min: 0,
			max: 100,
			stacked: true,
			color: "info",
		}),
	]);
};

export const progressStriped = () => {
	return [undefined, "success", "info", "warning", "danger"].map((i, ix) => {
		const val = [10, 25, 50, 75, 100][ix];
		return new b.progress.container(
			{
				label: `${i ? core.uppercaseFirst(i) : "Default"} striped example`,
				value: val,
				min: 0,
				max: 100,
			},
			new b.progress.bar({
				striped: true,
				textBgColor: i,
				style: { width: `${val}%` },
			})
		);
	});
};

export const progressAnimated = () => {
	return new b.progress.container({
		value: 75,
		striped: true,
		animated: true,
	});
};
