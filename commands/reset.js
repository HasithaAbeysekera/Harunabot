var getUser = require('../util/getUser.js');

exports.run = function(client, message, args) {
    let oldmemberList = message.guild.members.array();
    for (i = 0; i < oldmemberList.length; i++) {
      oldmemberList[i].setNickname('');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reset',
  description: 'Deletes all nicknames',
  usage: 'reset'
};
