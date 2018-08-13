const Discord = require("discord.js");
let assets = require('../assets/assets.json');
let moment = require('moment-timezone');

exports.run = function(client, message, args) {

  if (!args[0]) {
    let timeINDIA = moment().tz("Asia/Kolkata").format('HH:mm');
    let timeINDO = moment().tz("Asia/Jakarta").format('HH:mm');
    let timeSG = moment().tz("Asia/Singapore").format('HH:mm');
    let timeSA = moment().tz("Australia/Adelaide").format('HH:mm');
    let timeMELB = moment().tz("Australia/Melbourne").format('HH:mm');
    let timeNZ = moment().tz("Pacific/Auckland").format('HH:mm');
    let timeJP = moment().tz("Asia/Tokyo").format('HH:mm');

    return message.channel.send(`It is currently:\n\n` +
      `${timeINDIA} in India\n` +
      `${timeINDO} in Indonesia (West)/Vietnam\n` +
      `${timeSG} in Singapore/HK/Philippines/Indonesia (Central)\n` +
      `${timeJP} in Japan\n` +
      `${timeSA} in South Australia\n` +
      `${timeMELB} in Melbourne\n` +
      `${timeNZ} in New Zealand`);
  } else if (!args[1] && args[0]){
return;
  } else if (args[1] && args[0]){
return;
  } else {
    return message.channel.send(`Incorrect format`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'time',
  description: 'Get current time across several time zones.',
  usage: 'time'
};
