const Discord = require("discord.js");
const addHelpReaction = require('../util/addHelpReaction.js');
const xkcdGet = require('../util/xkcdGet.js');
const xkcdGet2 = require('../util/xkcdGet2.js');

exports.run = function(client, message, args) {
  if (args[0] == "new" || args[0] == "newest" || args[0] == "latest") {
    message.channel.send("Please wait while I grab the latest comic...");
    return xkcdGet2(client, message, 0);
  } else if (!args[0] || args[0] == "random" || args[0] == "r") {
    message.channel.send("Please wait while I grab a random comic...");
    return xkcdGet(client, message, 0, exports.help.name);
  } else if (parseInt(args[0]) < 1 || args[0] == "0") {
    return message.channel.send(`Error: number cannot be less than 1, click ❓ for more details`).then(msg => {
      addHelpReaction(client, msg, message, exports.help.name);
    }).catch((err => {
      console.log(err.stack);
    }));
  } else if (parseInt(args[0])) {
    return xkcdGet(client, message, parseInt(args[0]), exports.help.name);
  } else {
    return message.channel.send(`Error, click ❓ for more details`).then(msg => {
      addHelpReaction(client, msg, message, exports.help.name);
    }).catch((err => {
      console.log(err.stack);
    }));
  }
};

  //  message.channel.send("Please wait while I grab the comic....");

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'xkcd',
  description: 'Posts an XKCD comic. Use random/r for a random issue. Newest/latest/new for the latest and a number for a specific issue. Random comic if left blank.',
  usage: 'xkcd random, -xkcd newest, -xkcd 100'
};
