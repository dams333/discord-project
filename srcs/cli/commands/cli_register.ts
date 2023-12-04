import { LogLevel, log } from "../../io/logger";
import { CliCommand } from "../CliCommand";

export function cliRegister(cmd: CliCommand) {
	if (cmd.args.length != 2)
	{
		log(LogLevel.ERROR, "Usage: register <name> <token>");
		return;
	}
	const name = cmd.args[0];
	const token = cmd.args[1];
}