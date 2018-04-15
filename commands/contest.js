const Cjoin = require('../util/join.js');
const Cteams = require('../util/Cteams.js');


exports.run = function(client, message, args) {
  if (!args[0]) { //no arguments
    return message.channel.send('Error: no arguments');
  } else if (args[0].toLowerCase() === 'join') {
    return Cjoin(message, client);
  } else if (args[0].toLowerCase() === 'teams') {//displays teams
    return Cteams(message, client);//used to complete a mission for someone
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
