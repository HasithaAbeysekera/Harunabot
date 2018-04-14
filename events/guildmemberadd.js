const defaultChannelID = require("../config.json").defaultChannel;
const logChannelID = require("../config.json").logChannel;
let welcome = require('../assets/welcome.json');
module.exports = member => {
  let guild = member.guild;
  let defaultChannel = guild.channels.find(u => u.id == defaultChannelID);
  let logChannel = guild.channels.find(u => u.id == logChannelID);
  console.log(`${member.user.username} has joined ${guild}`);
  let size = welcome.length;
  let randNumber = Math.floor((Math.random() * size));
  let welcomeMsg = welcome[randNumber];
  let finalWelcome = welcomeMsg.replace("xxx", member.user);

  defaultChannel.send(finalWelcome);
  logChannel.send(`${member.user} has joined the server, welcome!`);
}
