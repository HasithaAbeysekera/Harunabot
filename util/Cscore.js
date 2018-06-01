const Discord = require("discord.js");

module.exports = (message, client) => {

  let thisUserId = message.author.id;
  if (client.HarunaData.has(thisUserId)) {
    return message.channel.send(`${message.author} currently has ${client.HarunaData.get(thisUserId)} points!`);
  } else if (client.BismarckData.has(thisUserId)) {
    return message.channel.send(`${message.author} currently has ${client.BismarckData.get(thisUserId)} points!`);
  } else {
    return message.channel.send("It appears you are not in either team");
  }
};
