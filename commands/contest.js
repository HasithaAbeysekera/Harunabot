const Cjoin = require('../util/join.js');
const Ccomplete = require('../util/complete.js');
const Cincomplete = require('../util/incomplete.js');

exports.run = function(client, message, args) {
  if (!args[0]) { //no arguments
    return message.channel.send('Error: no arguments');
  } else if (args[0].toLowerCase() === 'join') {
    return Cjoin(message, client);
    //create card for new player, check player isn't already in contest
  } else if (args[0].toLowerCase() === 'complete') {
    //used to complete a mission for someone
  } else if (args[0].toLowerCase() === 'incomplete') {

  }
return;
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'contest',
  description: 'Commands for contests (WIP)',
  usage: 'contest'
};
