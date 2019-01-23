exports.run = function(client, message, args) {
  client.user.setPresence({
      game: {
        name: args.join(" ")
      }
    })
    .then().catch(console.error);
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['setstatus'],
  permLevel: 4
};

exports.help = {
  name: 'setgame',
  description: 'Set Haruna\'s status.',
  usage: 'setgame [game]'
};
