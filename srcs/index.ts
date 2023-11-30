import { Client, GatewayIntentBits } from 'discord.js';
import { getline } from './io/readlineHandler';
import { logInfo } from './io/logger';

const client = new Client({
	intents: [
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.Guilds,
		GatewayIntentBits.MessageContent,
	],
});


async function wrapper() {
	while (true) {
		const str = await getline('> ');
		logInfo('You entered: ' + str);
	}
}

wrapper();
