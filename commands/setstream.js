exports.run = function(client, message, args) {
    if (args == "") {
        client.user.setGame(null);
    } else {
        client.user.setGame(args.join(" "), "https://www.twitch.tv/holo_thewise");
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stream'],
  permLevel: 4
};

exports.help = {
  name: 'setstream',
  description: 'Change Haruna\'s status to streaming [streamtitle]',
  usage: 'setstream [streamtitle]'
};
