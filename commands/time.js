const Discord = require("discord.js");
let assets = require('../assets/assets.json');
let moment = require('moment-timezone');

exports.run = function(client, message, args) {

let timeSG = moment().tz("Asia/Singapore").format('HH:mm');
let timeINDIA = moment().tz("Asia/Kolkata").format('HH:mm');
let timeINDO = moment().tz("Asia/Jakarta").format('HH:mm');
let timeSA = moment().tz("Australia/Adelaide").format('HH:mm');
let timeNSW = moment().tz("Australia/Sydney").format('HH:mm');
let timeQLD = moment().tz("Australia/Brisbane").format('HH:mm');


return message.channel.send(`It is currently:\n\n` +
  `${timeINDIA} in India\n` +
  `${timeSG} in Singapore/HK/Philippines\n` +
  `${timeINDO} in Indonesia\n` +
  `${timeSA} in South Australia\n` +
  `${timeNSW} in Sydney\n` +
  `${timeQLD} in Brisbane`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'time',
  description: 'get time',
  usage: 'time'
};
