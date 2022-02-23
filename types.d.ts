export namespace ColorfyTypes {
	interface Color {
		text: string;
		FGcolor?:
			| 'FGblack'
			| 'FGred'
			| 'FGgreen'
			| 'FGyellow'
			| 'FGblue'
			| 'FGmagenta'
			| 'FGcyan'
			| 'FGwhite';
		BGcolor?:
			| 'BGblack'
			| 'BGred'
			| 'BGgreen'
			| 'BGyellow'
			| 'BGblue'
			| 'BGmagenta'
			| 'BGcyan'
			| 'BGwhite';
		options?: 'Reset' | 'Bright' | 'Dim' | 'Underscore' | 'Blink' | 'Reverse' | 'Hidden';
	}

	interface Options {
		name?: string;
		log?: ('log' | 'debug' | 'info' | 'warn' | 'error')[];
	}
}
