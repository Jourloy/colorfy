import { ColorfyTypes } from '../types';
import moment from 'moment';

export class Colorfy {
	private name: string = '';
	private f: ('log' | 'debug' | 'info' | 'warn' | 'error')[] = [
		'log',
		'debug',
		'info',
		'warn',
		'error',
	];

	constructor(options?: ColorfyTypes.Options) {
		if (options) {
			if (options.name) this.name = options.name;
			if (options.log) this.f = options.log;
		}
	}

	private color(opt: ColorfyTypes.Color): string {
		const FGcolors = {
			FGblack: '\x1b[30m',
			FGred: '\x1b[31m',
			FGgreen: '\x1b[32m',
			FGyellow: '\x1b[33m',
			FGblue: '\x1b[34m',
			FGmagenta: '\x1b[35m',
			FGcyan: '\x1b[36m',
			FGwhite: '\x1b[37m',
		};
		const BGcolors = {
			BGblack: '\x1b[40m',
			BGred: '\x1b[41m',
			BGgreen: '\x1b[42m',
			BGyellow: '\x1b[43m',
			BGblue: '\x1b[44m',
			BGmagenta: '\x1b[45m',
			BGcyan: '\x1b[46m',
			BGwhite: '\x1b[47m',
		};
		const options = {
			Reset: '\x1b[0m',
			Bright: '\x1b[1m',
			Dim: '\x1b[2m',
			Underscore: '\x1b[4m',
			Blink: '\x1b[5m',
			Reverse: '\x1b[7m',
			Hidden: '\x1b[8m',
		};
		let res = '';
		if (opt.FGcolor) res += FGcolors[opt.FGcolor];
		if (opt.BGcolor) res += BGcolors[opt.BGcolor];
		if (opt.options) res += options[opt.options];
		res += opt.text + options.Reset;
		return res;
	}

	public debug(...args: any[]) {
		if (!this.f.includes('debug')) return;
		const time = `${moment().format('DD-MM-YYYY HH:MM:SS')}`;
		const level = this.color({ text: ` [ DEBUG ]`, FGcolor: 'FGmagenta' });
		const name = this.name !== '' ? this.name : 'Colorfy';

		if (args.length === 1 && typeof args[0] === 'object') {
			const text = this.color({ text: `Object:`, FGcolor: 'FGmagenta' });
			const total = `${time} | ${name} | ${level} ${text}`;
			console.log(total);
			console.log(args[0]);
			return;
		}
		const text = this.color({ text: args.join(' '), FGcolor: 'FGmagenta' });
		const total = `${time} | ${name} | ${level} ${text}`;
		console.log(total);
	}

	public log(...args: any[]) {
		if (!this.f.includes('log')) return;
		const time = `${moment().format('DD-MM-YYYY HH:MM:SS')}`;
		const level = this.color({ text: `   [ LOG ]`, FGcolor: 'FGgreen' });
		const name = this.name !== '' ? this.name : 'Colorfy';

		if (args.length === 1 && typeof args[0] === 'object') {
			const text = this.color({ text: `Object:`, FGcolor: 'FGgreen' });
			const total = `${time} | ${name} | ${level} ${text}`;
			console.log(total);
			console.log(args[0]);
			return;
		}
		const text = this.color({ text: args.join(' '), FGcolor: 'FGgreen' });
		const total = `${time} | ${name} | ${level} ${text}`;
		console.log(total);
	}

	public info(...args: any[]) {
		if (!this.f.includes('info')) return;
		const time = `${moment().format('DD-MM-YYYY HH:MM:SS')}`;
		const level = this.color({ text: `  [ INFO ]`, FGcolor: 'FGwhite', options: 'Dim' });
		const name = this.name !== '' ? this.name : 'Colorfy';

		if (args.length === 1 && typeof args[0] === 'object') {
			const text = this.color({ text: `Object:`, FGcolor: 'FGwhite', options: 'Dim' });
			const total = `${time} | ${name} | ${level} ${text}`;
			console.log(total);
			console.log(args[0]);
			return;
		}
		const text = this.color({ text: args.join(' '), FGcolor: 'FGwhite', options: 'Dim' });
		const total = `${time} | ${name} | ${level} ${text}`;
		console.log(total);
	}

	public warn(...args: any[]) {
		if (!this.f.includes('warn')) return;
		const time = `${moment().format('DD-MM-YYYY HH:MM:SS')}`;
		const level = this.color({ text: `  [ WARN ]`, FGcolor: 'FGyellow' });
		const name = this.name !== '' ? this.name : 'Colorfy';

		if (args.length === 1 && typeof args[0] === 'object') {
			const text = this.color({ text: `Object:`, FGcolor: 'FGyellow' });
			const total = `${time} | ${name} | ${level} ${text}`;
			console.log(total);
			console.log(args[0]);
			return;
		}
		const text = this.color({ text: args.join(' '), FGcolor: 'FGyellow' });
		const total = `${time} | ${name} | ${level} ${text}`;
		console.log(total);
	}

	public error(...args: any[]) {
		if (!this.f.includes('error')) return;
		const time = `${moment().format('DD-MM-YYYY HH:MM:SS')}`;
		const level = this.color({ text: ` [ ERROR ]`, FGcolor: 'FGred' });
		const name = this.name !== '' ? this.name : 'Colorfy';

		if (args.length === 1 && typeof args[0] === 'object') {
			const text = this.color({ text: `Object:`, FGcolor: 'FGred' });
			const total = `${time} | ${name} | ${level} ${text}`;
			console.log(total);
			console.log(args[0]);
			return;
		}
		const text = this.color({ text: args.join(' '), FGcolor: 'FGred' });
		const total = `${time} | ${name} | ${level} ${text}`;
		console.log(total);
	}
}
