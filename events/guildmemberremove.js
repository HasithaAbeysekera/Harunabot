const defaultChannelID = require("../config.json").defaultChannel;
module.exports = member => {
  let guild = member.guild;
  defaultChannel = guild.channels.find(u => u.id == defaultChannelID);
  console.log(`${member.user.username} has left ${guild}`);
  defaultChannel.send(`${member.user} has left the server :cry:`);
}
