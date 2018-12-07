const ms = require('ms');
const silencedRole = require('../config.json').silencedrole;
const rolecooldown = 1000 * 60 * 60 * 14;
exports.run = async (client, message, args) => {

let cwrole = message.guild.roles.find(u => u.name == "Active CB");
if (!cwrole) {
  return message.channel.send("Error no Active CB role found");
};

if (client.rollcallActive){
  return message.channel.send("A CW rolecall is already active for tonight.");
}

message.channel.send("Ahoy (clan mention), Haruna desu! :gao:  Please react Y or M on your availability for clan wars tonight! :Love:").then(msg => {
  client.rollcallMsgId = msg.id;
  client.rollcallActive = true;
}).catch(console.error);


function ClearCWRole() {
  cwrole.members.deleteAll();
};

client.setInterval(ClearCWRole, rolecooldown);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['cw'],
  permLevel: 2
};

exports.help = {
  name: 'rollcall',
  description: 'Initiates a CWs rollcall for FISH',
  usage: 'rollcall'
};