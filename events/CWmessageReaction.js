module.exports = (messageReaction,user) => {
  let cwconfirmed = messageReaction.message.guild.roles.find(u => u.name == "CB Confirmed");
  let cwmaybe = messageReaction.message.guild.roles.find(u => u.name == "CB Maybe");
  let client = messageReaction.message.client;
  if(user.bot){
    return;
  }
  if (message.channel.type == 'dm'){
    return;
  }
  if(client.rollcallActive && messageReaction.message.id == client.rollcallMsgId){
    if(messageReaction.emoji.name == '🇾'){
      let target = messageReaction.message.guild.members.find(u => u.id == user.id);
      target.addRole(cwconfirmed);
    }
    if(messageReaction.emoji.name == '🇲'){
      let target = messageReaction.message.guild.members.find(u => u.id == user.id);
      target.addRole(cwmaybe);
    }
  }
  return;
}