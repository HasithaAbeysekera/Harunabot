const Discord = require("discord.js");
var getUser = require('../util/getUser.js');
const owner = require('../config.json').ownerid;

exports.run = function(client, message, args) {
  if (!args[0]) {
    message.reply("your avatar is:");
    return message.channel.send(new Discord.Attachment(message.author.displayAvatarURL, 'avatar.jpg'));
  } else if (message.mentions.users.first()) {
    target = message.mentions.users.first();
    message.channel.send(`${target}'s avatar is:`);
    return message.channel.send(new Discord.Attachment(target.displayAvatarURL, 'avatar.jpg'));
  } else {
    return message.channel.send(`Error: incorrect format. See help for further details`);
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
  description: 'Display\'s the user\'s or server\'s avatar. Displays your own avatar if username is empty',
  usage: 'avatar [username (plaintext or mention)] or [server]'
};
