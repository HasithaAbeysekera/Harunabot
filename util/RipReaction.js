const Discord = require("discord.js");
let assets = require('../assets/assets.json');
/*
Get user object when given a targetUser string
*/
module.exports = (message) => {
  console.log("RipReaction");
  size = assets["wasted"].length;
  randNumber = Math.floor((Math.random() * size));

  const embed = new Discord.RichEmbed()
    .setTitle("RIP")
    .setImage(assets["wasted"][randNumber])
    .setColor(000000)
  message.channel.send(embed);
};
