let Kouhaichange2 = require('../util/kouhaichange.js')

exports.run = function (client, message, args) {
  client.kouhai = !client.kouhai;
  console.log(`Kouhai is ${client.kouhai}`);
  if(client.kouhai){
    Kouhaichange2(client);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 4
};

exports.help = {
  name: 'kouhai',
  description: 'Change kouhai names',
  usage: ''
};