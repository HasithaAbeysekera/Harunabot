var defaultChannel = require('../config.json').defaultChannel;

exports.run = function(client, message, args) {
    return message.guild.defaultChannel.send(args.join(" "));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'dsay',
    description: 'Haruna will talk in the default channel',
    usage: 'dsay [message]'
};
