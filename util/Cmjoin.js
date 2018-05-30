module.exports = (message, client, args) => {
  if (message.author.id != message.guild.ownerID) {
    return message.channel.send(`You cannot use this function`);
  }
  let teamHaruna = message.guild.roles.find(u => u.name == 'Team Haruna');
  let teamBismarck = message.guild.roles.find(u => u.name == 'Team Bismarck');
  let memberToAdd = message.mentions.members.first();
  if (memberToAdd.roles.find(u => u.name == 'Team Haruna') || memberToAdd.roles.find(u => u.name == 'Team Bismarck')) {
    return message.channel.send(`Error: you are already participating`);
  } else {
    if (args[2].toLowerCase() == 'haruna') {
      memberToAdd.addRole(teamHaruna);
      client.teamHaruna.set(memberToAdd.id, 0);
      return message.channel.send(`${message.author} has been assigned to Team Haruna!`);
    } else if (args[2].toLowerCase() == 'bismarck') {
      memberToAdd.addRole(teamBismarck);
      client.teamBismarck.set(memberToAdd.id, 0);
      return message.channel.send(`${message.author} has been assigned to Team Bismarck!`);
    } else {
      return message.channel.send(`Error`);
    }
  }
  return;
};
