const Discord = require("discord.js");

module.exports = (message, client, team) => {

  let total = 0;
  for (var [key, value] of team) {
    total = total + ParseInt(value);
  }
  return total;
};
