const Cjoin = require('../util/join.js');
const Ccomplete = require('../util/complete.js');
const Cincomplete = require('../util/incomplete.js');

exports.run = function(client, message, args) {
  if (!args[0]) { //no arguments
    return message.channel.send('Error: no arguments');
  } else if (args[0].toLowerCase() === 'join') {
    message.channel.send("joining");
    return Cjoin(message, client);
    //create card for new player, check player isn't already in contest
  } else if (args[0].toLowerCase() === 'card') {
    //displays progress card
  } else if (args[0].toLowerCase() === 'missions') {
    //displays missions
  } else if (args[0].toLowerCase() === 'complete') {
    //used to complete a mission for someone
    if (!parseInt(args[1]) || parseInt(args[1]) < 1 || parseInt(args[1]) > 25) {
      return message.channel.send('Please enter an appropriate number');
    } else if (!message.mentions.users.first()) {
      return message.channel.send(`Mention a user`);
    } else {
      let mission = parseInt(args[1]);
      let target = message.mentions.users.first();
      return Ccomplete(target, mission, message, client);
    }
  } else if (args[0].toLowerCase() === 'incomplete') {
    //used to reset a specific mission for someone
    if (!parseInt(args[1]) || parseInt(args[1]) < 1 || parseInt(args[1]) > 25) {
      return message.channel.send('Please enter an appropriate number');
    } else if (!message.mentions.users.first()) {
      return message.channel.send(`Mention a user`);
    } else {
      let mission = parseInt(args[1]);
      let target = message.mentions.users.first();
      return Cincomplete(target, mission, message, client);
    }
  }
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'contest',
  description: 'Commands for contests (WIP)',
  usage: ''
};
