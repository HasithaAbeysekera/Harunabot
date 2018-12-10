module.exports = (messageReaction,user) => {
  let cwrole = messageReaction.message.guild.roles.find(u => u.name == "Active CB");
  let client = messageReaction.message.client;
  if(user.bot){
    return;
  }

  if(client.rollcallActive && messageReaction.message.id == client.rollcallMsgId){
    if(messageReaction.emoji.name == '🇾'){
      let target = messageReaction.message.guild.members.find(u => u.id == user.id);
      target.addRole(cwrole);
    }
  }
  return;
}