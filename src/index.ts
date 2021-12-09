import { Client } from 'botasm';
import { Message } from 'discord.js';
import { Language } from './lang';
import { BaseCommand } from "botasm"

export class Command extends BaseCommand {
    name: string = 'ping';
    aliases: string[] = [];

    async run(
        message: Message,
        client: Client,
        margs: string[],
        sargs: any,
        pargs: any,
        cargs: any[]
    ) {
        const lang = Language(sargs['language']);

        console.log(cargs)

        let pingMS = lang.pingMS.replace('[ms]', String(client.ws.ping));

        message.channel.send(pingMS);
    }
}
