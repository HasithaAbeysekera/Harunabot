const Discord = require("discord.js");

module.exports = (message, client, team) => {
if (team == client.teamBismarck){
  embedThumbnail = 'https://i.imgur.com/u725OKI.png';
} else {
  embedThumbnail = client.user.displayAvatarURL;
}

  const teamEmbed = new Discord.RichEmbed()
    .setAuthor(`\u200b`, `${message.author.displayAvatarURL}`)
    .setTitle(`Team Haruna`)
    // .setThumbnail(client.user.displayAvatarURL)
    .setThumbnail(embedThumbnail)
    .setColor(0x00AE86)
    .setFooter(`test`, '')
    .setTimestamp();
  teamSize = team.array().length;
  console.log(`Team Haruna ${teamSize}`);
  // message.channel.send(client.haruna.array());

  // for (i = 0; i < teamSize; i++) {
  //   console.log(team.array());
  // }
  for ( var [key, value] of team.entries()) {
    let thisMember = message.guild.members.find(u => u.id == key);
    teamEmbed.addField(`${thisMember.user.username} - ${value}`, "\u200b", true);
  }
  return message.channel.send(teamEmbed);
};
