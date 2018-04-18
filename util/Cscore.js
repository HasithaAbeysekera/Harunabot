const Discord = require("discord.js");

module.exports = (message, client) => {

  let thisUserId = message.author.id;
  if (client.teamHaruna.has(thisUserId)) {
    return message.channel.send(`${message.author} currently has ${client.teamHaruna.get(thisUserId)} points!`);
  } else if (client.teamBismarck.has(thisUserId)) {
    return message.channel.send(`${message.author} currently has ${client.teamBismarck.get(thisUserId)} points!`);
  } else {
    return message.channel.send("It appears you are not in either team");
  }
};
