const ms = require('ms');
const rolecooldown = 1000 * 60 * 60 * 12;
exports.run = async (client, message, args) => {

let cwconfirmed = message.guild.roles.find(u => u.name == "CB Confirmed");
let cwmaybe = message.guild.roles.find(u => u.name == "CB Maybe");
let fishrole = message.guild.roles.find(u => u.name == "FISH");
if (!cwconfirmed && !cwmaybe) {
  return message.channel.send("Error no CB roles found");
};

if (client.rollcallActive){
  return message.channel.send("A CW rolecall is already active for tonight.");
}
const gao = message.guild.emojis.find(emoji => emoji.name === "gao");
const love = message.guild.emojis.find(emoji => emoji.name === "Love");
message.channel.send(`Ahoy ${fishrole}, Haruna desu! ${gao} Please react Y or M on your availability for clan wars tonight! ${love}`).then(msg => {
  message.delete();
  msg.react("🇾");
  msg.react("🇲")
  client.rollcallMsgId = msg.id;
  client.rollcallActive = true;
}).catch(console.error);

setTimeout(function(){ 
  let membersArray = cwconfirmed.members.array();
  for(i = 0; i < membersArray.length; i++){
    membersArray[i].removeRole(cwconfirmed);
  }
  let membersArray2 = cwmaybe.members.array();
  for(i = 0; i < membersArray2.length; i++){
    membersArray2[i].removeRole(cwmaybe);
  }
  client.rollcallMsgId = 0;
  client.rollcallActive = false;
}, rolecooldown);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['cw', 'cws'],
  permLevel: 2
};

exports.help = {
  name: 'rollcall',
  description: 'Initiates a CWs rollcall for FISH',
  usage: 'rollcall'
};