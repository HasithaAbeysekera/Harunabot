const Discord = require("discord.js");
const prefix = require('../config.json').prefix;
/*
Get user object when given a targetUser string
*/
module.exports = (client, message, originalMessage, command) => {
  const cmdPermlvl = ["Everyone", "Captains", "Admirals", "Owner Only"]
  let thisCommand = client.commands.get(command);
  let aliaslist = thisCommand.conf.aliases;
  if (aliaslist.length == 0) {
    aliases = "none";
  } else {
    aliases = `${prefix}${aliaslist.join(` ${prefix}`)}`;
  }

  const embed = new Discord.RichEmbed()
    .setAuthor(`${prefix}${command}`, `${originalMessage.author.displayAvatarURL}`)
    .setTitle(`\u200b`)
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(0x00AE86)
    .addField(`\u200b`, `**Aliases: ** ${aliases}\n` +
      `**Usage: ** ${prefix}${thisCommand.help.usage}\n` +
      `**Description - ** ${thisCommand.help.description}\n` +
      `**Permission Level - ** ${cmdPermlvl[thisCommand.conf.permLevel]}\n`)

    // .addField(`\u200b`, `**Aliases: ** ${aliases}`)
    // .addField(`\u200b`, `**Usage: ** ${prefix}${thisCommand.help.usage}`)
    // .addField(`\u200b`, `**Description - ** ${thisCommand.help.description}`)
    // .addField(`\u200b`, `**Permission Level - ** ${cmdPermlvl[thisCommand.conf.permLevel]}`)
    .setFooter(`This message will self destruct in 120s, press ❌ to delete`)
    .setTimestamp();

  message.channel.send(embed).then(msg => {
      msg.react('❌');
      // msg.delete();

      // const filter = (reaction, user) => {
      //   return reaction.emoji.name === ':x:' && user.id === message.author.id;
      // };

      const collector = msg.createReactionCollector((reaction, thisUser) => reaction.emoji.name === '❌' && thisUser.id === originalMessage.author.id, {
        time: 120000
      });

      // collector.on('collect', r => msg.delete().then(msg => console.log(`Deleted message from ${msg.author}`))
      //   .catch(console.error));
      collector.on('collect', r => collector.stop());
    // collector.on('collect', r => msg.delete().then(msg => console.log(`Deleted message from ${msg.author}`))

    collector.on('end', r => msg.delete().then(msg => console.log(`Timed out: Deleted message from ${msg.author}`))
      .catch(console.error));
  }).catch((err => {
  console.log(err.stack);
}));
};
