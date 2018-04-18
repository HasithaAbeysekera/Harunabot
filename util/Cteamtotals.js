const Discord = require("discord.js");
const Cteamtotal = require('../util/Cteamtotal.js');

module.exports = (message, client) => {

  let totalHaruna = Cteamtotal(message, client, client.teamHaruna);
  let totalBismarck = Cteamtotal(message, client, client.teamBismarck);

  return message.channel.send(`Team Haruna: ${totalHaruna}\nTeam Bismarck: ${totalBismarck}`);
};
