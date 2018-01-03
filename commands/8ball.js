const Discord = require("discord.js");
var eightball = require('../assets/8ball.json');
const farmhash = require('farmhash');

exports.run = function(client, message, args) {
  if (!args[0]) {
    return message.reply("aren't you going to ask a question?");
  }
  // argstring = (Math.floor((Math.random() * 100))).toString();
  argstring = args.join(' ');
  hash = farmhash.hash32(argstring);
  hash100 = hash % 100;
  hashFinal = Math.round(hash100 / 5);
  // message.channel.send(hashFinal);
  message.channel.send(`${eightball[hashFinal]}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 3
};

exports.help = {
  name: '8ball',
  description: 'The Magic 8-ball will tell your fortune',
  usage: '8ball'
};
