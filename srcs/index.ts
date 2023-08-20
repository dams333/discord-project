import { Client, GatewayIntentBits } from 'discord.js';
import { token } from './config.json';
import { getline } from './io/readlineHandler';
import { log, LogLevel } from './io/logger';

const client = new Client({
	intents: [
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.Guilds,
		GatewayIntentBits.MessageContent,
	],
});

client.on('ready', () => {
	setTimeout(() => {
		log(LogLevel.INFO, 'Logged in as ' + client.user?.tag);
	}, 3000);
});

async function wrapper() {
	await client.login(token);

	while (true) {
		const str = await getline('Enter a string: ');
		log(LogLevel.INFO, 'You entered: ' + str);
	}
}

wrapper();
