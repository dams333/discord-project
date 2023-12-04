import { getline } from './io/readlineHandler';
import { treatInput } from './cli/cli';

async function wrapper() {
	while (true) {
		const str = await getline('> ');
		treatInput(str);
	}
}

wrapper();
