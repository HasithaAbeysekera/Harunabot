module.exports = (message, client, args) => {
  if (message.author.id != message.guild.ownerID) {
    return message.channel.send(`You cannot use this function`);
  }
  let teamHaruna = message.guild.roles.find(u => u.name == 'Team Haruna');
  let teamBismarck = message.guild.roles.find(u => u.name == 'Team Bismarck');
  let memberToAdd = message.mentions.members.first();

    if (args[2].toLowerCase() == 'haruna') {
      teamHaruna.delete(memberToAdd.id);
      return message.channel.send(`${message.author} has been removed from Team Haruna!`);
    } else if (args[2].toLowerCase() == 'bismarck') {
      teamBismarck.delete(memberToAdd.id);
      return message.channel.send(`${message.author} has been removed from Team Bismarck!`);
    } else {
      return message.channel.send(`Error`);
    }
  return;
};
