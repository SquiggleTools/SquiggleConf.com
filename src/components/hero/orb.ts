const orbCenterWithin = (width: string) =>
	`calc(${width} - max(3.5rem, calc(${width} / 2 - 42rem)))`;

export const orbCenter = orbCenterWithin("100%");
export const orbCenterInContainer = orbCenterWithin("100cqw");
