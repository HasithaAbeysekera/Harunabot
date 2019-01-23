exports.run = function(client, message, args) {
    client.user.setPresence({
      game: {
        name: args.join(" "),
        type: "LISTENING"
      }
    }).then().catch(console.error);
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['watching'],
  permLevel: 4
};

exports.help = {
  name: 'setlisten',
  description: 'Change Haruna\'s status to listening to [something]',
  usage: 'setlisten [something]'
};
