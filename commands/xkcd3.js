const Discord = require("discord.js");
const addHelpReaction = require('../util/addHelpReaction.js');
const ordinal = require('../util/ordinal.js');
const xkcdGet = require('../util/xkcdGet.js');
let request = require("request");
let months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

exports.run = function(client, message, args) {
  if (!args[0]) {
    message.channel.send("random, no args");
    let apiURL = `https://xkcd.com/info.0.json`;
  } else if (args[0] == "random" || args[0] == "r") {
    message.channel.send("random");
    message.channel.send(`random number: ${limit}`);
  } else if (parseInt(args[0])) {
    message.channel.send(`parsed: ${parseInt(args[0])}`);
  } else{
    return message.channel.send("error");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'xkcd3',
  description: 'Posts the latest XKCD comic',
  usage: 'xkcd [username]'
};
