import type { AnchorComponent } from '../components/anchor.component.js';
import type { DimensionsComponent } from '../components/dimensions.component.js';
import type { TransformComponent } from '../components/transform.component.js';

export type SpriteEntity = DimensionsComponent & TransformComponent;
