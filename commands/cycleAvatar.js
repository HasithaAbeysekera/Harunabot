const Discord = require("discord.js");
const owner = require('../config.json').ownerid;
const prefix = require('../config.json').prefix;
const addHelpReaction = require('../util/addHelpReaction.js');

exports.run = function(client, message, args) {
  client.cycleAvatars = !client.cycleAvatars;
  message.channel.send(`cycleAvatars is now: ${client.cycleAvatars}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'cycleavatars',
  description: 'Toggles avatar changing',
  usage: ''
};
