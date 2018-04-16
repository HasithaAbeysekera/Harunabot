const Discord = require("discord.js");

module.exports = (message, client, team) => {
  const Haruna = new Discord.RichEmbed()
    .setAuthor(`\u200b`, `${message.author.displayAvatarURL}`)
    .setTitle(`Team Haruna`)
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(0x00AE86)
    .setFooter(`test`, '')
    .setTimestamp();
  teamSize = client.HarunaTeam.array().length;
  console.log(`Team Haruna ${teamSize}`);
  // message.channel.send(client.haruna.array());

  for (i = 0; i < teamSize; i++) {
    console.log(client.HarunaTeam.array());
  }
  return message.channel.send(Haruna);
}
