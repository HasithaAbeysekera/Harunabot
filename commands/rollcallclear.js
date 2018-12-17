exports.run = async (client, message, args) => {

let cwconfirmed = message.guild.roles.find(u => u.name == "CB Confirmed");
let cwmaybe = message.guild.roles.find(u => u.name == "CB Maybe");
if (!cwconfirmed && !cwmaybe) {
  return message.channel.send("Error no CB roles found");
};

  message.delete();
  client.rollcallMsgId = 0;
  client.rollcallActive = false;
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