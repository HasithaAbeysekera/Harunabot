const Cjoin = require('../util/Cjoin.js');
const Cmjoin = require('../util/Cmjoin.js');
const Cteams = require('../util/Cteams.js');
const Cadd = require('../util/Cadd.js');
const Cscore = require('../util/Cscore.js');
const Cteamtotals = require('../util/Cteamtotals.js');
const Cteamtotal = require('../util/Cteamtotal.js');
const Cremove = require('../util/Cremove.js');


exports.run = function(client, message, args) {
  if (!args[0]) { //no arguments
    return message.channel.send('Error: no arguments');
  } else if (args[0].toLowerCase() === 'join') {
    return Cjoin(message, client);
  } else if (args[0].toLowerCase() === 'mjoin') {
    return Cmjoin(message, client, args);
  } else if (args[0].toLowerCase() === 'haruna') {
    return Cteams(message, client, client.HarunaData);
  } else if (args[0].toLowerCase() === 'bismarck') {
    return Cteams(message, client, client.BismarckData);
  } else if (args[0].toLowerCase() === 'myscore') {
    return Cscore(message, client);
  } else if (args[0].toLowerCase() === 'add') {
    if (!message.member.roles.find(u => u.name == 'Contest Moderator')) {
      return message.channel.send("Only a Contest Moderator can use this command");
    } else {
      return Cadd(message, client, args);
    }
  } else if (args[0].toLowerCase() === 'totals') {
    return Cteamtotals(message, client);
  } else if (args[0].toLowerCase() === 'remove') {
    return Cremove(message, client, args);
  }
  return message.channel.send('Error: unrecognised arguments');
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'contest',
  description: 'Commands for contests (WIP)',
  usage: 'contest'
};
