module.exports = (messageReaction,user) => {
  let cwrole = messageReaction.message.guild.roles.find(u => u.name == "Active CB");
  let client = messageReaction.message.client;
  if(user.bot){
    return;
  }
  messageReaction.message.channel.send(`rolecall is active: ${client.rollcallActive} and id is: ${client.rollcallMsgId}`);
  if(client.rollcallActive && messageReaction.message.id == client.rollcallMsgId){
    messageReaction.message.channel.send(`active area reached`);
    if(messageReaction.emoji.name == '🇾'){
      messageReaction.message.channel.send(`reacted by ${user}`);
      let target = messageReaction.message.guild.members.find(u => u.id == user.id);
      messageReaction.message.channel.send(`member found ${target.id}`);
      target.addRole(cwrole);
    }
  }
  return;
}