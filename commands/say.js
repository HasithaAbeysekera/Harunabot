exports.run = function(client, message, args) {
  if(!args[0]){
    return message.channel.send(`Error: message can't be empty`);
  }
  if (message.cleanContent.includes("@​everyone") || message.cleanContent.includes("@​here")) {
    if (!message.member.hasPermission("MENTION_EVERYONE")) {
      return message.channel.send("Please don't use me for `@everyone` or `@here` pings");
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
  usage: 'say [text]'
};
