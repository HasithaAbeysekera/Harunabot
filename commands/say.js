exports.run = function(client, message, args) {
  return message.channel.send(`${args.join(" ")}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['repeat'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Haruna will repeat your words',
  usage: 'say'
};
