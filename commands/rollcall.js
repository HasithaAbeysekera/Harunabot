const ms = require('ms');
const rolecooldown = 1000 * 60 * 60;
exports.run = async (client, message, args) => {

let cwrole = message.guild.roles.find(u => u.name == "Active CB");
if (!cwrole) {
  return message.channel.send("Error no Active CB role found");
};

if (client.rollcallActive){
  return message.channel.send("A CW rolecall is already active for tonight.");
}

message.channel.send("Ahoy (clan mention), Haruna desu! :gao:  Please react Y or M on your availability for clan wars tonight! :Love:").then(msg => {
  message.delete();
  msg.react("🇾");
  msg.react("🇳")
  client.rollcallMsgId = msg.id;
  client.rollcallActive = true;
}).catch(console.error);

setTimeout(function(){ 
  let membersArray = cwrole.members.array();
  for(i = 0; i < membersArray.length; i++){
    membersArray[i].removeRole(cwrole);
  }
  message.channel.send("Cleared CW role");
}, rolecooldown);

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