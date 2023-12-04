const rl = require('readline').createInterface({
	input: process.stdin,
	output: null,
	terminal: true
});

export async function getline(prompt: string): Promise<string> {
	process.stdout.write(prompt);
	return new Promise(resolve => {		
		rl.question(prompt, (answer: string) => {
			resolve(answer);
		});
  });
}
