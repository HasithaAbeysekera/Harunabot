const Discord = require("discord.js");
const prefix = require('../config.json').prefix;
exports.run = (client, message, args) => {
  if (!args[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    // message.channel.sendCode('asciidoc', `Haruna's Command List\n\n[Use ${prefix}help <commandname> for details]\n\n${client.commands.map(c => `${prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
    const embed = new Discord.RichEmbed()
      .setAuthor(`\u200b`, `${message.author.displayAvatarURL}`)
      .setTitle(`Haruna\'s Commands List`)
      .setThumbnail(client.user.displayAvatarURL)
      .setColor(0x00AE86)
      .addField('\u200b', '\u200b', true)
      .setFooter(`For more information type ${prefix}help [commandname]`, '')
      .setTimestamp();


    for (i = 0; i < client.commands.size; i++) {
      clist = client.commands.array()[i];
      embed.addField(`${prefix}${clist.help.name}`, `${clist.help.description}`);
    }
    // message.channel.send(`${message.author}, I've sent you a PM with the help information`);
    message.author.send(
        embed, '', {
          disableEveryone: true
        }
      ).then(() => {
        if (message.channel.type !== 'dm') {
          message.channel.send('I\'ve sent you a DM with all my commands!');
        }
      })
      .catch(() => message.reply('it seems like I can\'t DM you!'));
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      // command = client.commands.get(command);
      // message.channel.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}`);
      const cmdPermlvl = ["Everyone", "Captains", "Admirals", "Owner Only"]
      let thisCommand = client.commands.get(command);
      let aliaslist = thisCommand.conf.aliases;
      if (aliaslist.length == 0) {
        aliases = "none";
      } else {
        aliases = `${prefix}${aliaslist.join(` ${prefix}`)}`;
      }

      const embed = new Discord.RichEmbed()
        .setAuthor(`${prefix}${command}`, `${message.author.displayAvatarURL}`)
        .setTitle(`\u200b`)
        .setThumbnail(client.user.displayAvatarURL)
        .setColor(0x00AE86)
        .addField(`\u200b`, `**Aliases: ** ${aliases}`)
        .addField(`\u200b`, `**Usage: ** ${prefix}${thisCommand.help.usage}`)
        .addField(`\u200b`, `**Description - ** ${thisCommand.help.description}`)
        .addField(`\u200b`, `**Permission Level - ** ${cmdPermlvl[thisCommand.conf.permLevel]}`)
        .setTimestamp();

      message.channel.send(embed);
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
