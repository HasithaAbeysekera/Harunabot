const Cjoin = require('../util/join.js');
const Cteams = require('../util/Cteams.js');
const Cadd = require('../util/Cadd.js');
const Cscore = require('../util/Cscore.js');
const Cteamtotals = require('../util/Cteamtotals.js');
const Cteamtotal = require('../util/Cteamtotal.js');


exports.run = function(client, message, args) {
  if (!args[0]) { //no arguments
    return message.channel.send('Error: no arguments');
  } else if (args[0].toLowerCase() === 'join') {
    return Cjoin(message, client);
  } else if (args[0].toLowerCase() === 'teamharuna') { //displays teams
    return Cteams(message, client, client.teamHaruna); //used to complete a mission for someone
  } else if (args[0].toLowerCase() === 'teambismarck') {
    return Cteams(message, client, client.teamBismarck);
  } else if (args[0].toLowerCase() === 'myscore') {
    return Cscore(message, client);
  } else if (args[0].toLowerCase() === 'add') {
    // if()//filter roles or individuals{}
    if (message.channel.id == 435849317706891284) { //teamharuna
      return Cadd(message, client, args, client.teamHaruna);
    } else if (message.channel.id == 435849356013338625) { //teambismarck
      return Cadd(message, client, args, client.teamBismarck);
    } else {
      return message.channel.send(`Error: This command cannot be used in this channel`);
    }
  } else if (args[0].toLowerCase() === 'totals') {
    return Cteamtotals(message, client);
  } else if (args[0].toLowerCase() === 'incomplete') {

  }
  return message.channel.send('Error: unrecognised arguments');
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'contest',
  description: 'Commands for contests (WIP)',
  usage: 'contest'
};
