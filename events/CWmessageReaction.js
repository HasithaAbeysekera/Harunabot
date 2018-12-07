const getMember = require('../util/getGuildMember.js');
module.exports = (messageReaction,user) => {
  let cwrole = message.guild.roles.find(u => u.name == "Active CB");
  let rollcallMsgId = client.rollcallMsgId;
  let rollcallActive = client.rollcallActive;

  if(rollcallActive && messageReaction.message.id == rollcallMsgId){
    if(messageReaction == '🇾'){
      let thisMember = getMember(messageReaction.message, user);
      thisMember.addrole(cwrole);
    }
  }
  return;
}
