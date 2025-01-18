// todo: determine unified event type
type TBD = any;

type ConditionallyBindEvent = {
	condition: boolean;
	callback: (event: TBD) => void;
};

export type InteractionsComponent = {
	onpointerover: (event: TBD) => void;
	onpointerup: ConditionallyBindEvent;
	onpointerdown: ConditionallyBindEvent;
	onpointerout: ConditionallyBindEvent;
	onpointermove: ConditionallyBindEvent;
};
