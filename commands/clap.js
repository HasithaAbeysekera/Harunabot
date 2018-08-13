const Discord = require("discord.js");
let assets = require('../assets/assets.json');

exports.run = function(client, message, args) {

  const embed = new Discord.RichEmbed()
      .setImage(assets["puckclap"])
      .setColor(0xFFFFFF)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clapping'],
  permLevel: 0
};

exports.help = {
  name: 'clap',
  description: 'Puck approves',
  usage: 'clap'
};
