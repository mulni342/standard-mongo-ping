"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command() {
        this.name = 'ping';
        this.aliases = [];
    }
    Command.prototype.run = function (message, client, margs, sargs, pargs, cargs) {
        message.channel.send("Pong! " + client.ws.ping + "ms");
    };
    return Command;
}());
exports.Command = Command;
