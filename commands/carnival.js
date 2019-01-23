const Discord = require("discord.js");
let assets = require('../assets/assets.json');

exports.run = function(client, message, args) {

    const embed = new Discord.RichEmbed()
        .setImage(assets["carnival"])
        .setColor(15750656)
    message.channel.send(embed);
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['carnivaldayo', 'maya'],
    permLevel: 0
};

exports.help = {
    name: 'carnival',
    description: 'IT\'S CARNIVAL TIME',
    usage: 'carnival'
};
