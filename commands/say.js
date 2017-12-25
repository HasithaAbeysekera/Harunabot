exports.run = function(client, message, args) {
  msg = args.join(" ");
  return message.channel.send(`\`${msg}\``);
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
