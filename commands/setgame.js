exports.run = function(client, message, args) {
    if (args == "") {
        client.user.setGame(null);
    } else {
        client.user.setGame(args.join(" "));
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setstatus'],
  permLevel: 3
};

exports.help = {
  name: 'setgame',
  description: 'Set Haruna\'s status. eg: setgame CSGO will display "Playing CSGO"',
  usage: 'setgame [game]'
};
