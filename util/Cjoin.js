module.exports = (message, client) => {
  if (!message.member.roles.find(u => u.name == 'Line Officers')){
    return message.channel.send("You must be a clan member to take part");
  }
  let teamHaruna = message.guild.roles.find(u => u.name == 'Team Haruna');
  let teamBismarck = message.guild.roles.find(u => u.name == 'Team Bismarck');
  if (message.member.roles.find(u => u.name == 'Team Haruna') || message.member.roles.find(u => u.name == 'Team Bismarck')) {
    return message.channel.send(`Error: you are already participating`);
  } else {
    let rand = Math.floor(Math.random() * 2);
    if (rand == 0) {
      message.member.addRole(teamHaruna);
      client.HarunaData.set(message.member.id, 0);
      return message.channel.send(`${message.author} has joined Team Haruna!`);
    } else {
      message.member.addRole(teamBismarck);
      client.BismarckData.set(message.member.id, 0);
      return message.channel.send(`${message.author} has joined Team Bismarck!`);
    }
  }
  return;
}
