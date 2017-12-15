const prefix = require('../config.json').prefix;
module.exports = message => {
    let client = message.client;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(' ')[0].slice(prefix.length);
    let args = message.content.split(' ').slice(1);
    let perms = client.elevation(message);
    let cmd;

    if (message.channel.type == "dm") {
        if ( !((command == 'help') || (client.aliases.get(command)) == 'help')) {
            message.channel.send("Sorry, I only respond to the `help` command in a DM");
            return;
        }
    }
    if (client.commands.has(command)) {
        cmd = client.commands.get(command);
        console.log(`Command ${command} activated`);
    } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
        console.log(`Command ${command} activated`);
    }
    if (cmd) {
        if (perms < cmd.conf.permLevel) return;
        cmd.run(client, message, args, perms);
    }
};
