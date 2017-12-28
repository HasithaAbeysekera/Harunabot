exports.run = function(client, message, args) {
  message.channel.send(`clean: ${message.cleanContent}`);
  if (message.cleanContent.includes("@​everyone") || message.cleanContent.includes("@​here")) {
    if (!message.member.hasPermission("MENTION_EVERYONE")) {
      return message.channel.send("Please don't use me for `@everyone` pings");
    }
  }
  msg = args.join(" ");
  return message.channel.send(`${msg}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['repeat'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Haruna will repeat your words',
  usage: 'say'
};
