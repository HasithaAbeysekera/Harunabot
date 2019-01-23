const Discord = require("discord.js");
let assets = require('../assets/assets.json');

exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
    .setImage(assets["thumbsup"])
    .setColor(0xFF0000)
  message.channel.send(embed);
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'thumbsup',
  description: 'Megumin approves',
  usage: 'thumbsup'
};
