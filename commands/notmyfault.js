const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
        .setImage(assets["notmyfault"])
        .setColor('#1affb2')
    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'notmyfault',
  description: 'It\s never your fault',
  usage: 'notmyfault'
};
