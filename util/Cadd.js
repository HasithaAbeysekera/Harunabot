const Discord = require("discord.js");

module.exports = (message, client, args, team) => {
  if (!args[1] || !message.mentions.members.first()) {
    return message.channel.send(`Error: no user mentionned`);
  } else {
    let userToAdd = message.mentions.members.first();
    if (!args[2]) {
      return message.channel.send(`Error: please input points to add`);
    } else if (!parseInt(args[2])) {
      return message.channel.send(`Error: please input points to add`);
    }
    pointsToAdd = parseInt(args[2]);
    // if (!team.get(userToAdd.id)) {
    //   return message.channel.send(`Error: invalid user`);
    // }
    let newPoints = parseInt(team.get(userToAdd.id)) + pointsToAdd;
    team.set(userToAdd.id, newPoints);
    return message.channel.send(`Added ${pointsToAdd} points to ${message.guild.members.find(u => u.id == userToAdd.id)}. Total points:${newPoints}`);
  }
};
