import { Client } from 'botasm';
import { Message } from 'discord.js';

export class Command {
    name: string = 'ping';
    aliases: string[] = [];
    run(
        message: Message,
        client: Client,
        margs: string[],
        sargs: any[],
        pargs: any,
        cargs: any[]
    ) {
        
        message.channel.send(`Pong! ${client.ws.ping}ms`);
    }
}
