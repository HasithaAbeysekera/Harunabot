module.exports = (message, client) => {
  const Haruna = new Discord.RichEmbed()
    .setAuthor(`\u200b`, `${message.author.displayAvatarURL}`)
    .setTitle(`Team Haruna`)
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(0x00AE86)
    let roleHaruna = message.member.roles.find(u => u.name == 'Team Haruna');
    teamSize = roleHaruna.members.length;
    for (i=0; i<length;i++){
      .addField(roleHaruna.array()[i], roleHaruna.array()[i+1], true);
    }
    .setFooter(`For more information type ${prefix}help [commandname]`, '')
    .setTimestamp();

    return message.channel.send(Haruna);
}
