const Discord = require("discord.js");
const owner = require('../config.json').ownerid;
const prefix = require('../config.json').prefix;
const addHelpReaction = require('../util/addHelpReaction.js');

exports.run = function(client, message, args) {
  if (!args[0]) {
    message.reply("your avatar is:");
    return message.channel.send(new Discord.Attachment(message.author.displayAvatarURL, 'avatar.gif'));
  } else if (message.mentions.users.first()) {
    target = message.mentions.users.first();
    message.channel.send(`${target}'s avatar is:`);
    return message.channel.send(new Discord.Attachment(target.displayAvatarURL, 'avatar.gif'));
  } else if (args[0] == 'server') {
    return message.channel.send(new Discord.Attachment(message.guild.iconURL, 'server.gif'));
  } else {
    return message.channel.send("Error: incorrect format. Click ❓ for more details").then(msg => {
      addHelpReaction(client, msg, message, exports.help.name);
    }).catch((err => {
      console.log(err.stack);
    }));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['profilepic', 'icon'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Display\'s the user\'s avatar. Displays your own avatar if no username is provided',
  usage: 'avatar [username]'
};
