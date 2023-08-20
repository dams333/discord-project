import * as readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let promptSave = '';

export async function getline(prompt: string): Promise<string> {
	promptSave = prompt;
	return new Promise((resolve, reject) => {
		rl.question(prompt, (answer: string) => {
			promptSave = '';
			resolve(answer);
		});
	});
}

export function redrawPrompt(): void {
	if (promptSave === '') return;
	rl.write(promptSave);
}
