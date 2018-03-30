var getUser = require('../util/getUser.js');

exports.run = function(client, message, args) {
    let oldmemberList = message.guild.members.array();
    for (i = 0; i < oldmemberList.length; i++) {
      oldmemberList[i].setNickname('');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reset',
  description: 'April fools',
  usage: 'nick'
};
