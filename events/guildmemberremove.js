const defaultChannelID = require("../config.json").defaultChannel;
const logChannelID = require("../config.json").logChannel;
module.exports = member => {
  let guild = member.guild;
  defaultChannel = guild.channels.find(u => u.id == defaultChannelID);
  logChannel = guild.channels.find(u => u.id == logChannelID);
  console.log(`${member.user.username} has left ${guild}`);
  defaultChannel.send(`${member.user} has left the server :cry:`);
  logChannel.send(`${member.user} has left the server :cry:`);
}
