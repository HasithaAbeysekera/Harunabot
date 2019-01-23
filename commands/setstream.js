exports.run = function(client, message, args) {
  client.user.setPresence({
    game: {
      name: args.join(" "),
      url: "https://www.twitch.tv/holo_thewise"
    }
  }).then().catch(console.error);
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['stream'],
  permLevel: 4
};

exports.help = {
  name: 'setstream',
  description: 'Change Haruna\'s status to streaming [streamtitle]',
  usage: 'setstream [streamtitle]'
};
