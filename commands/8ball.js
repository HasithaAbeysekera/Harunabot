const Discord = require("discord.js");
var eightball = require('../assets/8ball.json');

exports.run = function(client, message, args) {
  if (!args[0]) {
    return message.reply("aren't you going to ask a question?");
  }
  size = eightball.length;
  quoteNumber = Math.floor((Math.random() * size));
  message.channel.send(`${eightball[quoteNumber]}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'The Magic 8-ball will tell your fortune',
  usage: '8ball'
};
