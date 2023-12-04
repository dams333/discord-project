import { LogLevel, log } from "../io/logger";
import { CliCommand } from "./CliCommand";
import { cliRegister } from "./commands/cli_register";

const cmds: { [key: string]: (cmd: CliCommand) => void } = {
	'register': cliRegister
};

export function treatInput(line: string) {
	const cmd = new CliCommand(line);
	if (cmd.cmd in cmds) {
		cmds[cmd.cmd](cmd);
	} else {
		log(LogLevel.ERROR, `Unknown command: ${cmd.cmd}`)
	}
}