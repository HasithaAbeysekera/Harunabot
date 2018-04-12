const Discord = require("discord.js");
let assets = require('../assets/assets.json');

exports.run = function(client, message, args) {
  LineOfficersRole = message.guild.roles.find(u => u.name == 'Line Officers');
  if (message.member.roles.find(u => u.name == 'Line Officers')) {
    return message.channel.send(`You're already in a clan`);
  } else {
    if (args[0].toLowerCase() == 'seas') {
      clanRole = message.guild.roles.find(u => u.name == 'SEAS');
      message.member.addRole(clanRole);
      message.member.addRole(LineOfficersRole);
      return message.channel.send(`${message.member}, you've been added to SEAS!`)
    } else if (args[0].toLowerCase() == 'uksdf') {
      clanRole = message.guild.roles.find(u => u.name == 'UKSDF');
      message.member.addRole(clanRole);
      message.member.addRole(LineOfficersRole);
      return message.channel.send(`${message.member}, you've been added to UKSDF!`)
    } else {
      return message.channel.send(`Error, please try again`);
    }
    return message.channel.send(`Error, please try again`);
  }
  return message.channel.send(`Error, please try again`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'iam',
  description: 'Sorts user into clan',
  usage: 'iam [SEAS/UKSDF]'
};
