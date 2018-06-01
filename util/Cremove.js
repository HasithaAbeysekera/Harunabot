module.exports = (message, client, args) => {
  if (message.author.id != message.guild.ownerID) {
    return message.channel.send(`You cannot use this function`);
  }
  let teamHaruna = message.guild.roles.find(u => u.name == 'Team Haruna');
  let teamBismarck = message.guild.roles.find(u => u.name == 'Team Bismarck');
  let memberToAdd = message.mentions.members.first();

  if (!args[2]) {
    return message.channel.send("Please enter a team name");
  }
  if (args[2].toLowerCase() == 'haruna') {
    let Harunaarray = client.teamHaruna
    Harunaarray.delete(memberToAdd.id);
    return message.channel.send(`${memberToAdd} has been removed from Team Haruna!`);
  } else if (args[2].toLowerCase() == 'bismarck') {
    let Bismarckarray = client.teamBismarck
    Bismarckarray.delete(memberToAdd.id);
    return message.channel.send(`${memberToAdd} has been removed from Team Bismarck!`);
  } else {
    return message.channel.send(`Error`);
  }
  return;
};
