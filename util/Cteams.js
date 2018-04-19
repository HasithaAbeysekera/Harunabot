const Discord = require("discord.js");

module.exports = (message, client, team) => {
if (team == client.teamBismarck){
  embedThumbnail = 'https://i.imgur.com/u725OKI.png';
  embedTitle = 'Team Bismarck';
} else {
  embedThumbnail = client.user.displayAvatarURL;
  embedTitle = 'Team Haruna';
}

  const teamEmbed = new Discord.RichEmbed()
    .setAuthor(`\u200b`, `${message.author.displayAvatarURL}`)
    .setTitle(embedTitle)
    // .setThumbnail(client.user.displayAvatarURL)
    .setThumbnail(embedThumbnail)
    .setColor(0x00AE86)
    // .setFooter(`test`, '')
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
