import type { InteractionsComponent } from '$lib/types/components/interactions.component.js';
import type { ViewContainer } from 'pixi.js';

export const bindInteraction = (
	entity: ViewContainer,
	events: Partial<{
		onpointerdown: InteractionsComponent['onpointerdown'];
		onpointermove: InteractionsComponent['onpointermove'];
		onpointerout: InteractionsComponent['onpointerout'];
		onpointerover: InteractionsComponent['onpointerover'];
		onpointerup: InteractionsComponent['onpointerup'];
	}>,
): (() => void) => {
	return $effect.root(() => {
		const {
			onpointerdown,
			onpointermove,
			onpointerout,
			onpointerover,
			onpointerup,
		} = events;

		$effect(() => {
			entity.interactive = !!(
				onpointerover ||
				onpointerout?.condition ||
				onpointerdown?.condition ||
				onpointermove?.condition ||
				onpointerup?.condition
			);
		});

		$effect(() => {
			if (onpointerover) {
				entity.off('pointerover').on('pointerover', onpointerover);
			} else if (!onpointerover) {
				entity.off('pointerover');
			}
		});

		$effect(() => {
			if (onpointerout?.condition) {
				entity.off('pointerout').on('pointerout', onpointerout.callback);
			} else if (!onpointerout?.condition) {
				entity.off('pointerout');
			}
		});

		$effect(() => {
			if (onpointerdown?.condition) {
				entity.off('pointerdown').on('pointerdown', onpointerdown.callback);
			} else if (!onpointerdown?.condition) {
				entity.off('pointerdown');
			}
		});

		$effect(() => {
			if (onpointermove?.condition) {
				entity.off('pointermove').on('pointermove', onpointermove.callback);
			} else if (!onpointermove?.condition) {
				entity.off('pointermove');
			}
		});

		$effect(() => {
			if (onpointerup?.condition) {
				entity.off('pointerup').on('pointerup', onpointerup.callback);
			} else if (!onpointerup?.condition) {
				entity.off('pointerup');
			}
		});
	});
};
