const Discord = require("discord.js");
const prefix = require('../config.json').prefix;
const commandHelp = require('../util/commandHelp.js');
const addHelpReaction = require('../util/addHelpReaction.js');

exports.run = (client, message, args) => {
  if (!args[0]) {
    const commandNames = Array.from(client.commands.keys());

    const embed = new Discord.RichEmbed()
      .setAuthor(`\u200b`, `${message.author.displayAvatarURL}`)
      .setTitle(`Haruna\'s Commands List`)
      .setThumbnail(client.user.displayAvatarURL)
      .setColor(0x00AE86)
      .addField('\u200b', '\u200b', true)
      .setFooter(`For more information type ${prefix}help [commandname]`, '')
      .setTimestamp();

    const embed2 = new Discord.RichEmbed()
      .setAuthor(`\u200b`, `${message.author.displayAvatarURL}`)
      .setTitle(`Haruna\'s Commands List (cont)`)
      .setThumbnail(client.user.displayAvatarURL)
      .setColor(0x00AE86)
      .addField('\u200b', '\u200b', true)
      .setFooter(`For more information type ${prefix}help [commandname]`, '')
      .setTimestamp();

    for (i = 0; i < 20; i++) {
      clist = client.commands.array()[i];
      embed.addField(`${prefix}${clist.help.name}`, `${clist.help.description}`);
    }
    for (j = 20; i < client.commands.size; i++) {
      clist = client.commands.array()[i];
      embed2.addField(`${prefix}${clist.help.name}`, `${clist.help.description}`);
    }
    message.author.send(
      embed, '', {
        disableEveryone: true
      }
    ).then(message.author.send(
      embed2, '', {
        disableEveryone: true
      }
    )).then(() => {
      if (message.channel.type !== 'dm') {
        message.channel.send('I\'ve sent you a DM with all my commands!');
      }
    }).catch(() => message.reply('it seems like I can\'t DM you!'));
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      commandHelp(client, message, message, command)
    } else {
      return message.channel.send("Error: incorrect format. Click ❓ for more details").then(msg => {
        addHelpReaction(client, msg, message, exports.help.name);
      }).catch((err => {
        console.log(err.stack);
      }));
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays help for the specified command or shows whole command list if none specificed',
  usage: 'help [command]'
};
