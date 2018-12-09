const ms = require('ms');
const silencedRole = require('../config.json').silencedrole;
const rolecooldown = 1000 * 60 * 60;
exports.run = async (client, message, args) => {

let cwrole = message.guild.roles.find(u => u.name == "Active CB");
if (!cwrole) {
  return message.channel.send("Error no Active CB role found");
};

  message.delete();
  client.rollcallMsgId = 0;
  client.rollcallActive = false;
  let membersArray = cwrole.members.array();
  for(i = 0; i < membersArray.length; i++){
    membersArray[i].removeRole(cwrole);
  }
  message.channel.send("Cleared CW role");

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['cwclear'],
  permLevel: 2
};

exports.help = {
  name: 'rollcallclear',
  description: 'Clears current rollcall',
  usage: 'rollcall'
};