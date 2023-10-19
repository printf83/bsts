import { span } from "../html/span.js";
import { bsType } from "../interface/core/bsType.js";
import { rndBetween } from "./util/rndBetween.js";

export const placeholder = (
	min: number,
	max: number,
	minCol?: 1 | 2 | 3 | 4 | 5 | 6,
	maxCol?: 1 | 2 | 3 | 4 | 5 | 6
) => {
	minCol ??= 1;
	maxCol ??= 4;

	let aR = Array(rndBetween(min, max)).fill("");
	return aR.map(
		() =>
			new span(
				{
					loadingPlaceholder: true,
					marginEnd: 1,
					col: rndBetween(minCol!, maxCol!) as bsType.col,
				},
				""
			)
	);
};
