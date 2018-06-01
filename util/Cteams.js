const Discord = require("discord.js");
const Cteamtotal = require('../util/Cteamtotal.js');

module.exports = (message, client, team) => {
if (team == client.BismarckData){
  embedThumbnail = 'https://i.imgur.com/u725OKI.png';
  embedTitle = 'Team Bismarck';
  embedFooter = Cteamtotal(message, client, client.BismarckData);
} else {
  embedThumbnail = client.user.displayAvatarURL;
  embedTitle = 'Team Haruna';
  embedFooter = Cteamtotal(message, client, client.HarunaData);
}

  const teamEmbed = new Discord.RichEmbed()
    .setAuthor(`\u200b`, `${message.author.displayAvatarURL}`)
    .setTitle(embedTitle)
    // .setThumbnail(client.user.displayAvatarURL)
    .setThumbnail(embedThumbnail)
    .setColor(0x00AE86)
    .setFooter(`Team Total: ${embedFooter}`, '')
    .addField("\u200b", "\u200b", false)
    .setTimestamp();
  teamSize = team.array().length;
  console.log(`Team Haruna ${teamSize}`);

  for ( var [key, value] of team.entries()) {
    let thisMember = message.guild.members.find(u => u.id == key);
    teamEmbed.addField(`${thisMember.user.username} - ${parseInt(value)}`, "\u200b", true);
  }
  return message.channel.send(teamEmbed);
};
