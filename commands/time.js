const Discord = require("discord.js");
let assets = require('../assets/assets.json');
let moment = require('moment-timezone');

exports.run = function(client, message, args) {

let timeINDIA = moment().tz("Asia/Kolkata").format('HH:mm');
let timeINDO = moment().tz("Asia/Jakarta").format('HH:mm');
let timeSG = moment().tz("Asia/Singapore").format('HH:mm');
let timeSA = moment().tz("Australia/Adelaide").format('HH:mm');
let timeMELB = moment().tz("Australia/Melbourne").format('HH:mm');


return message.channel.send(`It is currently:\n\n` +
  `${timeINDIA} in India\n` +
  `${timeINDO} in Indonesia\n` +
  `${timeSG} in Singapore/HK/Philippines\n` +
  `${timeSA} in South Australia\n` +
  `${timeMELB} in Melbourne`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'time',
  description: 'get time',
  usage: 'time'
};
