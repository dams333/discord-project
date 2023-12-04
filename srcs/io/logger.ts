export enum LogLevel {
	INFO,
	WARN,
	ERROR,
}

enum ConsoleColor {
	RESET = '\x1b[0m',
	BRIGHT = '\x1b[1m',
	UNDERSCORE = '\x1b[4m',
	BLINK = '\x1b[5m',
	BLACK = '\x1b[30m',
	RED = '\x1b[31m',
	GREEN = '\x1b[32m',
	YELLOW = '\x1b[33m',
	BLUE = '\x1b[34m',
	MAGENTA = '\x1b[35m',
	CYAN = '\x1b[36m',
	WHITE = '\x1b[37m',
	GRAY = '\x1b[90m',
	BG_BLACK = '\x1b[40m',
	BG_RED = '\x1b[41m',
	BG_GREEN = '\x1b[42m',
	BG_YELLOW = '\x1b[43m',
	BG_BLUE = '\x1b[44m',
	BG_MAGENTA = '\x1b[45m',
	BG_CYAN = '\x1b[46m',
	BG_WHITE = '\x1b[47m',
	BG_GRAY = '\x1b[100m',
}

function getIntAsTwoDigits(num: number): string {
	if (num < 10) {
		return '0' + num;
	}
	return num.toString();
}

function getCurrentDate(): string {
	const date = new Date();
	return (
		date.getFullYear() +
		'/' +
		getIntAsTwoDigits(date.getMonth() + 1) +
		'/' +
		getIntAsTwoDigits(date.getDate()) +
		'-' +
		getIntAsTwoDigits(date.getHours()) +
		':' +
		getIntAsTwoDigits(date.getMinutes()) +
		':' +
		getIntAsTwoDigits(date.getSeconds())
	);
}

export function log(level: LogLevel, message: string): void {
	let toPrint = '[' + getCurrentDate() + '] ';
	switch (level) {
		case LogLevel.INFO:
			toPrint += ConsoleColor.GREEN + '[INFO] ' + ConsoleColor.RESET;
			break;
		case LogLevel.WARN:
			toPrint += ConsoleColor.YELLOW + '[WARN] ' + ConsoleColor.RESET;
			break;
		case LogLevel.ERROR:
			toPrint += ConsoleColor.RED + '[ERROR] ' + ConsoleColor.RESET;
			break;
	}
	toPrint += message;
	console.log('\r' + toPrint + ConsoleColor.RESET);
}

export function logInfo(message: string): void {
	log(LogLevel.INFO, message);
}