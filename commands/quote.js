const Discord = require("discord.js");
var quotes = require('../assets/quotes.json');

exports.run = function(client, message, args) {

  size = quotes.length;
  quoteNumber = Math.floor((Math.random() * size) + 1);
  message.channel.send(`${quotes[quoteNumber]}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['quotes'],
  permLevel: 0
};

exports.help = {
  name: 'quote',
  description: 'SEAS Quotes',
  usage: 'quote'
};
