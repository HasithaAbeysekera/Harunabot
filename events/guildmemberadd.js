const defaultChannelID = require("../config.json").defaultChannel;
const logChannelID = require("../config.json").logChannel;
let welcome = require('../assets/welcome.json');
const silencedRole = require('../config.json').silencedrole;

module.exports = member => {
  let guild = member.guild;
  let client = guild.client;
  let defaultChannel = guild.channels.find(u => u.id == defaultChannelID);
  let logChannel = guild.channels.find(u => u.id == logChannelID);
  console.log(`${member.user.username} has joined ${guild}`);

  if (client.lockit[member.id]) {
    let silenced = guild.roles.find(u => u.name == silencedRole);
    defaultChannel.send(`Welcome back ${member.user}, you're still muted`);
    logChannel.send(`${member.user} has rejoined the server, still muted!`);
    member.addRole(silenced);
  } else {

    let size = welcome.length;
    let randNumber = Math.floor((Math.random() * size));
    let welcomeMsg = welcome[randNumber];
    let finalWelcome = welcomeMsg.replace("xxx", member.user);

    defaultChannel.send(finalWelcome);
    logChannel.send(`${member.user} has joined the server, welcome!`);
  }
}
