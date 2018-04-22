module.exports = (message, client) => {
  if (message.author.id != guild.ownerID) {
    return message.channel.send(`You cannot use this function`);
  }
  let teamHaruna = message.guild.roles.find(u => u.name == 'Team Haruna');
  let teamBismarck = message.guild.roles.find(u => u.name == 'Team Bismarck');
  let memberToAdd = message.mentions.members.first();

    if (args[2].toLowerCase() == 'haruna') {
      teamHaruna.delete(memberToAdd.id);
      return message.channel.send(`${message.author} has been assigned to Team Haruna!`);
    } else if (args[2].toLowerCase() == 'bismarck') {
      teamBismarck.delete(memberToAdd.id);
      return message.channel.send(`${message.author} has been assigned to Team Bismarck!`);
    } else {
      return message.channel.send(`Error`);
    }
  return;
};