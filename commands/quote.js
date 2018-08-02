let quotes = require('../assets/quotes.json');

exports.run = function(message) {

  size = quotes.length;
  quoteNumber = Math.floor((Math.random() * size));
  message.channel.send(`${quotes[quoteNumber]}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['quotes'],
  permLevel: 0
};

exports.help = {
  name: 'quote',
  description: 'A collection of Quotes',
  usage: 'quote'
};
