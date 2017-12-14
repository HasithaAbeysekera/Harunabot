const Discord = require("discord.js");
var getUser = require('../util/getUser.js');
const owner = require('../config.json').ownerid;

exports.run = function(client, message, args) {
  if (!args[0]) {
    message.reply("Your avatar is:");
    return message.channel.send(new Discord.Attachment(message.author.avatarURL, 'avatar.jpg'));
  } else if (args[0].toLowerCase() === 'server') {
    serveravatar = message.guild.iconURL;
    if (serveravatar) {
      message.channel.send(`The server avatar is:`);
      return message.channel.send(new Discord.Attachment(message.guild.iconURL, 'avatar.jpg'));
    } else {
      return message.channel.send("This server doesn't have an icon");
    }
  } else if (message.mentions.users.first()) {
    target = message.mentions.users.first();
    message.channel.send(`${target}'s avatar is:`);
    return message.channel.send(new Discord.Attachment(target.avatarURL, 'avatar.jpg'));
  } else if (args[0]) {
    target = getUser(message, args[0]);
    if (target) {
      message.channel.send(`${target}'s avatar is:`);
      return message.channel.send(new Discord.Attachment(target.avatarURL, 'avatar.jpg'));
    } else {
      return message.channel.send(`Error: User not found`);
    }
  } else {
    return message.channel.send(`Error: incorrect format`);
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
