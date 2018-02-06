const Discord = require("discord.js");
let assets = require('../assets/assets.json');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
        .setImage(assets["carry"])
        .setColor('#4d2600')
    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'carry',
  description: 'SEAS will carry, confirmed by flumy',
  usage: 'carry'
};
