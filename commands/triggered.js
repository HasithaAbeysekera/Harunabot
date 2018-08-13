const Discord = require("discord.js");
let assets = require('../assets/assets.json');

exports.run = function(client, message, args) {

  size = assets["triggered"].length;
  randNumber = Math.floor((Math.random() * size));

  const embed = new Discord.RichEmbed()
      .setImage(assets["triggered"][randNumber])
      .setColor(0xFFFFFF)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['trigger', 'ree', 'reee', 'reeee'],
  permLevel: 0
};

exports.help = {
  name: 'triggered',
  description: 'REEEEEEEEEEEEEE',
  usage: 'triggered'
};
