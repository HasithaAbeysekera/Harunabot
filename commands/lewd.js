const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {

  size = assets["lewd"].length;
  quoteNumber = Math.floor((Math.random() * size) + 1);

  const embed = new Discord.RichEmbed()
      .setImage(assets["lewd"][quoteNumber])
      .setColor(0xFFFFFF)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'lewd',
  description: 'When things are too lewd to handle',
  usage: 'lewd'
};
