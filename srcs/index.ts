import { getline } from './io/readlineHandler';
import { LogLevel, enableDebugLog, log } from './io/logger';
import { treatInput } from './cli/cli';

async function wrapper() {
	for (let i = 0; i < process.argv.length; i++) {
		if (process.argv[i] === '-d' || process.argv[i] === '--debug') {
			enableDebugLog();
		}
	}
	log(LogLevel.DEBUG, 'Debug log enabled');
	const startingTime = new Date();
	log(LogLevel.INFO, 'Starting...');

	const diff = new Date().getTime() - startingTime.getTime();
	log(LogLevel.SUCCESS, `Started in ${diff}ms`);
	while (true) {
		const str = await getline('> ');
		treatInput(str);
	}
}

wrapper();
