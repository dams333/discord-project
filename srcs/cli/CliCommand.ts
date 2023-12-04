export class CliCommand {
	cmd: string;
	args: string[];

	constructor(line: string) {
		const parts = line.split(' ');
		this.cmd = parts[0];
		this.args = parts.slice(1);
	}
}