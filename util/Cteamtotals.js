const Discord = require("discord.js");
const Cteamtotal = require('../util/Cteamtotal.js');

module.exports = (message, client) => {

  let totalHaruna = Cteamtotal(message, client, client.teamHaruna);
  let totalBismarck = Cteamtotal(message, client, client.teamBismarck);
  let equal = (totalHaruna == totalBismarck);
  if (totalHaruna > totalBismarck) {
    leader = 'Haruna';
    diff = totalHaruna - totalBismarck;
  } else {
    leader = 'Bismarck'
    diff = totalBismarck - totalHaruna;
  }
  if(equal){
    leaderText = 'Teams are tied!';
  } else {
    leaderText = `Team ${leader} is currently in the lead by ${diff} points!`;
  }
  return message.channel.send(`Team Haruna: ${totalHaruna}\nTeam Bismarck: ${totalBismarck}\n\n${leaderText}`);
};
