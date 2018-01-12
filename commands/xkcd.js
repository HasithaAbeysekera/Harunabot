const Discord = require("discord.js");
const addHelpReaction = require('../util/addHelpReaction.js');
const ordinal = require('../util/ordinal.js');
const xkcdGet = require('../util/xkcdGet.js');
const xkcdGet2 = require('../util/xkcdGet2.js');
let months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

exports.run = function(client, message, args) {
  if (!args[0] || args[0] == "newest") {
    message.channel.send("newest");
    return xkcdGet2(message, 0);
  } else if (args[0] == "random" || args[0] == "r") {
    message.channel.send("random");
    return xkcdGet(message, 0);
  } else if (parseInt(args[0]) < 1 || args[0] == "0") {
    return message.channel.send(`Error: number cannot be less than 1`);
  } else if (parseInt(args[0])) {
    return xkcdGet(message, parseInt(args[0]));
  } else {
    return message.channel.send("error");
  }
};

  //  message.channel.send("Please wait while I grab the comic....");

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'xkcd',
  description: 'Posts the latest XKCD comic',
  usage: 'xkcd [username]'
};
