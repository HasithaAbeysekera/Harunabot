const Discord = require("discord.js");
const addHelpReaction = require('../util/addHelpReaction.js');

exports.run = (client, message, args) => {
  if (!message.mentions.members.size) {
    return message.channel.send("Please mention a user to warn. Click ❓ for more details").then(msg => {
      addHelpReaction(client, msg, message, exports.help.name);
    }).catch((err => {
      console.log(err.stack);
    }));
  } else {
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(' ');
    if (!reason) {
      reason = 'No reason mentioned';
    }
    const embed = new Discord.RichEmbed()
      .setAuthor(`YOU HAVE BEEN WARNED`, `${message.author.displayAvatarURL}`)
      .setTitle(`\u200b`)
      .setThumbnail(member.user.displayAvatarURL)
      .setColor('#ff0000')
      .addField(`User:`, `${member.displayName}`)
      .addField('Admin:', `${message.author.username}`)
      .addField('Reason:', `${reason}`)
      .setTimestamp();
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the user. Optional: reason',
  usage: 'warn [user] [reason]'
};
