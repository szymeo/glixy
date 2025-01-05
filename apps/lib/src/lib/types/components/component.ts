import type { AnchorComponent } from './anchor.component.js';
import type { DimensionsComponent } from './dimensions.component.js';
import type { InteractionsComponent } from './interactions.component.js';
import type { ScaleComponent } from './scale.component.js';
import type { TextureComponent } from './texture.component.js';
import type { TransformComponent } from './transform.component.js';

export type Component = {
	anchor: AnchorComponent;
	dimensions: DimensionsComponent;
	interaction: InteractionsComponent;
	scale: ScaleComponent;
	texture: TextureComponent;
	transform: TransformComponent;
};
