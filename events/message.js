const Discord = require("discord.js");
const prefix = require('../config.json').prefix;
const cooldowns = new Discord.Collection();
const RipReaction = require('../util/RipReaction.js');
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) {
    if (message.content.toLowerCase().includes('press f') || (message.content.toLowerCase().trim() == 'f')) {
      return message.channel.send(`:regional_indicator_f:`);
    } else if (message.content.toLowerCase().trim() == "rip") {
      return RipReaction(message);
      // return message.channel.send(`test rip`);
    } else {
      return;
    }
  }
  let args = message.content.split(' ').slice(1);
  let command = message.content.toLowerCase().split(' ')[0].slice(prefix.length);
  let argstring = args.join(' ').toLowerCase();
  //  let perms = client.elevation(message);
  let cmd;

  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
    console.log(`Command ${command} activated by ${message.author.username}`);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
    console.log(`Command ${command} activated by ${message.author.username}`);
  }
  if (cmd) {
    let perms = 0;
    if (message.channel.type == 'dm') {
      if (cmd.conf.guildOnly) {
        return message.channel.send("Sorry, I don't respond to that command in a DM");
      }
    } else {
      let perms = client.elevation(message);
      if (perms < cmd.conf.permLevel) {
        return message.channel.send(`You don't have permission to use this command.`);
      }
    }
    cmd.run(client, message, args, perms);
  }
};
