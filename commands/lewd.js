const Discord = require("discord.js");
let assets = require('../assets/assets.json');

exports.run = function(message) {

  size = assets["lewd"].length;
  randNumber = Math.floor((Math.random() * size));

  const embed = new Discord.RichEmbed()
      .setImage(assets["lewd"][randNumber])
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
