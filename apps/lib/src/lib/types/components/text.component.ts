import type { TextStyleFontStyle, TextStyleFontWeight } from 'pixi.js';

export type TextComponent = {
	text: string;
	style: {
		font: string;
		weight: TextStyleFontWeight;
		size: number;
		color: number;
		style: TextStyleFontStyle;
	};
};
