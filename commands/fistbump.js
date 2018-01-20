const Discord = require("discord.js");
let assets = require('../assets/assets.json');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
        .setImage(assets["fistbump"])
        .setColor(0x00FFFF)
    message.channel.send(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'fistbump',
    description: 'Brofist',
    usage: 'fistbump'
};
