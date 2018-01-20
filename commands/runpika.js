const Discord = require("discord.js");
let assets = require('../assets/assets.json');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
        .setImage(assets["runpika"])
        .setColor(0xFFFF00)
    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['runepika'],
  permLevel: 0
};

exports.help = {
  name: 'runpika',
  description: 'Whoa Whoa! Whoa Whoa!',
  usage: 'runpika'
};
